import chokidar from "chokidar";
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

class FileWatcher {
  // dirs
  DROPBOX = "_dropbox";
  PROCESSED = "_processed";
  CONVERTED = "_converted";
  REJECTED = "_rejected";

  // file type extensions
  imageExtensions = [".jpg", ".jpeg", ".png", ".tiff", ".webp", ".gif", ".avif", "heic"];
  videoExtensions = [".mp4", ".mov", ".avi", ".mkv", ".wmv", ".flv", ".webm"];

  // config
  static DEFAULT_MAX_SIZE = 1280;
  static IMG_OUTPUT_FORMAT = "jpg";
  static JPG_QUALITY = 80;
  static JPG_OPTIONS = { quality: FileWatcher.JPG_QUALITY, mozjpeg: true };

  constructor(maxSize = FileWatcher.DEFAULT_MAX_SIZE) {
    this.maxSize = maxSize;
    this.createPaths();
    this.addWatcher();
    this.dropboxQueue = [];
  }

  //////////////////////////////////////
  // file watcher methods
  //////////////////////////////////////

  createPaths() {
    // Ensure all necessary directories exist
    [this.DROPBOX, this.PROCESSED, this.CONVERTED, this.REJECTED].forEach((dir) => {
      fs.mkdir(dir, { recursive: true }).catch((error) => {
        console.error(`⚠️ FileWatcher.createPaths(): Error creating directory ${dir}:`, error);
      });
    });
  }

  addWatcher() {
    this.watcher = chokidar.watch(this.DROPBOX, {
      // see all options: https://github.com/paulmillr/chokidar
      persistent: true,
      ignored: /(^|[\/\\])\../, // ignore dotfiles
      ignoreInitial: true, // change to false if you want to trigger `add` for all files already in the folder on start
      depth: 0,
      // usePolling: true, // defaults to false
    });

    this.watcher
      .on("add", async (filePath) => this.onFileAdded(filePath))
      .on("change", (filePath) => this.onFileChanged(filePath))
      .on("unlink", (filePath) => this.onFileRemoved(filePath));
  }

  async readFileWithRetry(filePath, maxRetries = 10, delay = 100) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const buffer = await fs.readFile(filePath);
        if (!buffer || buffer.length === 0) {
          // console.error(`File is empty`,);
          console.warn(`EMPTY FILE: ${filePath}`);
          throw new Error("EMPTY_FILE");
        }
        return buffer;
      } catch (error) {
        if (
          (error.code === "EBUSY" && attempt < maxRetries) ||
          (error.message === "EMPTY_FILE" && attempt < maxRetries)
        ) {
          console.error(`File is busy or empty`);
          console.warn(`FILE ERROR: ${filePath}`);
          // console.log(`[FILE WATCHER]: File is busy or empty, retrying in ${delay}ms (attempt ${attempt}/${maxRetries})`);
          await new Promise((resolve) => setTimeout(resolve, delay));
        } else {
          throw error;
        }
      }
    }
    return null; // all retries failed
  }

  async onFileAdded(filePath) {
    if (filePath.includes(".jpg.tmp") == true) return; // ignore temporary files
    // console.log(`[FILE WATCHER]: File ${filePath} was dropped`);
    this.dropboxQueue.push(filePath);

    // debounce starting the file resizing/processing
    // without debounce, all files dropped at the same time, and the queue wasn't building
    clearTimeout(this.debounceFileAdd);
    this.debounceFileAdd = setTimeout(() => {
      this.processNextInQueue();
    }, 200);
    // console.log(`[FILE WATCHER]: File ${filePath} added to queue. Queue length: ${this.dropboxQueue.length}`);
  }

  async processNextInQueue() {
    // check if queue is empty
    if (this.dropboxQueue.length === 0) {
      // this.appStore.set("last_import_time", new Date().toLocaleTimeString(), true);
      console.log("[FILE WATCHER]: Dropbox queue is empty, nothing to process.");
      return;
    }

    // process the next file in the queue
    const filePath = this.dropboxQueue.shift();
    console.log(`[FILE WATCHER]: Processing file: ${filePath}`);
    try {
      await fs.access(filePath);
      await this.checkFileTypeAndProcess(filePath);
    } catch (error) {
      console.error(`File doesn't exist: ${filePath}`);
    }

    // continue processing the next file
    this.processNextInQueue();
  }

  async checkFileTypeAndProcess(filePath) {
    // check if it's an image or video based on extension
    const fileName = path.basename(filePath);
    let ext = path.extname(filePath).toLowerCase();
    if (this.imageExtensions.includes(ext)) {
      await this.processImageFile(filePath, fileName, ext);
    } else if (this.videoExtensions.includes(ext)) {
      await this.processVideoFile(filePath);
    } else {
      console.warn(`Unsupported file type for file: ${filePath}`);
      await this.handleFailedFile(filePath, fileName);
    }
  }

  async processImageFile(filePath, fileName, ext) {
    // build output filename
    const outputFileName = `${fileName.replace(ext, "")}_${this.maxSize}.${FileWatcher.IMG_OUTPUT_FORMAT}`;

    // read file with retry logic
    let imageData;
    try {
      imageData = await this.readFileWithRetry(filePath, 5, 100);
    } catch (error) {
      this.handleFailedFile(filePath, fileName);
      return;
    }
    if (!imageData || !imageData.length) {
      this.handleFailedFile(filePath, fileName);
      return;
    }

    // save resized image
    // if it fails, move to rejected folder
    // if it succeeds, move to processed folder
    let success = false;
    try {
      await sharp(imageData)
        .rotate()
        .resize(this.maxSize, this.maxSize, { fit: "inside", withoutEnlargement: true })
        .toFormat("jpg", FileWatcher.JPG_OPTIONS)
        .toFile(`${this.CONVERTED}/${outputFileName}`);
      success = true;
      console.log(`Image Imported: ${fileName} (${this.dropboxQueue.length + 1} left)`);
    } catch (error) {
      // sharp failed, log the error and move to rejected folder
      success = false;
      console.error(`Image Import failed: ${fileName}`);
    } finally {
      // move original file to processed or rejected folder
      let destinationPath = success ? this.PROCESSED : this.REJECTED;
      const newName = path.join(destinationPath, fileName);
      await this.moveFile(filePath, newName);
    }
  }

  async processVideoFile(filePath) {
    const fileName = path.basename(filePath);
    console.log(`Video file detected, moving to processed: ${fileName}`);
    const newName = path.join(this.PROCESSED, fileName);
    await this.moveFile(filePath, newName);
  }

  async handleFailedFile(filePath, fileName) {
    console.error(`[FILE WATCHER]: Skipping empty or unreadable file: ${filePath}`);
    const newName = path.join(this.REJECTED, fileName);
    await this.moveFile(filePath, newName);
  }

  async moveFile(from, to) {
    try {
      await fs.rename(from, to);
    } catch (error) {
      console.error(`Error moving file: ${from}`);
    }
  }

  onFileChanged(filePath) {
    // console.log(`[FILE WATCHER]: File ${filePath} has been changed`);
  }

  onFileRemoved(filePath) {
    // console.log(`[FILE WATCHER]: File ${filePath} has been removed`);
  }
}

// get args
let args = process.argv.slice(2);
let maxSize = args.includes("max-size") ? parseInt(args[args.indexOf("max-size") + 1]) : FileWatcher.DEFAULT_MAX_SIZE;

// instantiate file watcher
const fileWatcher = new FileWatcher(maxSize);
