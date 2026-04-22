import "./design-tokens.css";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Spline+Sans:wght@400;500;600;700&display=swap";
const LINK_ID = "rfp-hub-spline-sans";

/**
 * Injects the Spline Sans stylesheet link once per page load. Runs lazily so
 * SSR / Node-based tooling that executes module imports without a DOM
 * (e.g. `ph build` bundling) is a no-op. Any second import is idempotent
 * because we check for an existing link with the same id.
 */
function injectFontStylesheet(): void {
  if (typeof document === "undefined") return;
  if (document.getElementById(LINK_ID)) return;
  const link = document.createElement("link");
  link.id = LINK_ID;
  link.rel = "stylesheet";
  link.href = FONT_HREF;
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);
}

injectFontStylesheet();
