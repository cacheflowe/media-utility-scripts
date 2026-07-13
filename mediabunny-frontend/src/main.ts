// Standalone site entry point.
// Renders the shared toolkit markup into the page and wires it to `document`.
import "./style.css";
import { TOOLKIT_MARKUP } from "./toolkitTemplate";
import { mountToolkit } from "./toolkitCore";

document.body.innerHTML = TOOLKIT_MARKUP;
mountToolkit(document, { themeElement: document.documentElement });
