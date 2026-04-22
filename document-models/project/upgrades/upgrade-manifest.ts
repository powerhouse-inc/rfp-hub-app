import type { UpgradeManifest } from "document-model";
import { latestVersion, supportedVersions } from "./versions.js";

export const projectUpgradeManifest: UpgradeManifest<typeof supportedVersions> =
  {
    documentType: "rfp-hub/project",
    latestVersion,
    supportedVersions,
    upgrades: {},
  };
