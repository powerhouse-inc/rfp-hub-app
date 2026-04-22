import type { UpgradeManifest } from "document-model";
import { latestVersion, supportedVersions } from "./versions.js";

export const grantApplicationUpgradeManifest: UpgradeManifest<
  typeof supportedVersions
> = {
  documentType: "rfp-hub/grant-application",
  latestVersion,
  supportedVersions,
  upgrades: {},
};
