import type { Manifest } from "document-model";
import manifestJson from "./powerhouse.manifest.json" with { type: "json" };
export { documentModels } from "./document-models/document-models.js";
export { upgradeManifests } from "./document-models/upgrade-manifests.js";
export { editors } from "./editors/editors.js";
export { processorFactory } from "./processors/factory.js";
// JSON imports widen `type: "var"` to `string`, so cast through unknown to
// satisfy the narrower `"var" | "secret"` union in `Manifest["config"]`.
export const manifest: Manifest = manifestJson as unknown as Manifest;
