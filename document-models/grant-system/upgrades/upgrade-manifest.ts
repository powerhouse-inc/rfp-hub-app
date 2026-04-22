import type { UpgradeManifest } from "document-model";
import { latestVersion, supportedVersions } from "./versions.js";

export const grantSystemUpgradeManifest: UpgradeManifest<
  typeof supportedVersions
> = {
  documentType: "rfp-hub/grant-system",
  latestVersion,
  supportedVersions,
  upgrades: {},
};
