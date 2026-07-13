// Web component entry point.
// Defines <media-converter>, a fully self-contained, shadow-DOM-isolated
// drop-in that can be added to any page with a single <script> tag.
import appCss from "./style.css?inline";
import { TOOLKIT_MARKUP } from "./toolkitTemplate";
import { mountToolkit } from "./toolkitCore";

// Pico scopes its design tokens to `:root`, which matches nothing inside a
// shadow root. Rescope to `:host` so the tokens land on the custom element and
// cascade into the shadow tree. (The explicit `data-theme` on the inner wrapper
// then wins for light/dark via cascade proximity.)
const scopedCss = appCss.replace(/:root\b/g, ":host");

// Typography Pico normally applies to <body> — replicated onto the wrapper,
// since there is no <body> inside a shadow root.
const baseCss = `
:host { display: block; }
.mb-app {
  font-family: var(--pico-font-family, system-ui, sans-serif);
  font-size: var(--pico-font-size, 100%);
  line-height: var(--pico-line-height, 1.5);
  color: var(--pico-color);
  background-color: var(--pico-background-color);
  -webkit-font-smoothing: antialiased;
  padding: 0.5rem 1.5rem 2rem;
}
`;

export class MediaConverter extends HTMLElement {
  connectedCallback() {
    // Guard against re-entry if the element is moved/re-attached in the DOM.
    if (this.shadowRoot) return;

    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = scopedCss + baseCss;
    shadow.appendChild(style);

    const wrapper = document.createElement("div");
    wrapper.className = "mb-app";
    // Initial theme; mountToolkit() then applies the saved/OS preference.
    wrapper.setAttribute("data-theme", this.getAttribute("theme") || "dark");
    wrapper.innerHTML = TOOLKIT_MARKUP;
    shadow.appendChild(wrapper);

    mountToolkit(shadow, { themeElement: wrapper });
  }
}

if (!customElements.get("media-converter")) {
  customElements.define("media-converter", MediaConverter);
}

// Deprecated alias for the original tag name; a subclass is required because a
// constructor can only be registered under one tag. Remove once no embeds use it.
if (!customElements.get("mediabunny-toolkit")) {
  customElements.define("mediabunny-toolkit", class extends MediaConverter {});
}
