// Minimal ZIP writer using the "store" method (no compression). Batch image
// outputs are already compressed (JPEG/WebP/PNG/AVIF), so storing keeps the
// archive small while avoiding any third-party dependency. Produces one Blob,
// so "Download all" is a single download — no multi-download block, no folder
// permission prompt.

export type ZipEntry = { name: string; data: Uint8Array };

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(bytes: Uint8Array): number {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

const u16 = (v: number) => new Uint8Array([v & 0xff, (v >>> 8) & 0xff]);
const u32 = (v: number) =>
  new Uint8Array([v & 0xff, (v >>> 8) & 0xff, (v >>> 16) & 0xff, (v >>> 24) & 0xff]);

function concat(parts: Uint8Array[]): Uint8Array {
  let len = 0;
  for (const p of parts) len += p.length;
  const out = new Uint8Array(len);
  let o = 0;
  for (const p of parts) {
    out.set(p, o);
    o += p.length;
  }
  return out;
}

export function zipStore(entries: ZipEntry[]): Blob {
  const enc = new TextEncoder();
  const fileParts: Uint8Array[] = [];
  const centralParts: Uint8Array[] = [];
  let offset = 0;

  const DATE = 0x0021; // 1980-01-01
  const FLAGS = 0x0800; // UTF-8 filename

  for (const entry of entries) {
    const nameBytes = enc.encode(entry.name);
    const crc = crc32(entry.data);
    const size = entry.data.length;

    const localHeader = concat([
      u32(0x04034b50),
      u16(20),
      u16(FLAGS),
      u16(0), // method: store
      u16(0), // mod time
      u16(DATE),
      u32(crc),
      u32(size),
      u32(size),
      u16(nameBytes.length),
      u16(0),
      nameBytes,
    ]);
    fileParts.push(localHeader, entry.data);

    centralParts.push(
      concat([
        u32(0x02014b50),
        u16(20), // version made by
        u16(20), // version needed
        u16(FLAGS),
        u16(0), // method
        u16(0), // time
        u16(DATE),
        u32(crc),
        u32(size),
        u32(size),
        u16(nameBytes.length),
        u16(0), // extra len
        u16(0), // comment len
        u16(0), // disk number
        u16(0), // internal attrs
        u32(0), // external attrs
        u32(offset),
        nameBytes,
      ]),
    );

    offset += localHeader.length + size;
  }

  const central = concat(centralParts);
  const eocd = concat([
    u32(0x06054b50),
    u16(0),
    u16(0),
    u16(entries.length),
    u16(entries.length),
    u32(central.length),
    u32(offset),
    u16(0),
  ]);

  return new Blob([...fileParts, central, eocd] as BlobPart[], { type: "application/zip" });
}
