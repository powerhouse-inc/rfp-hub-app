import type { UpgradeManifest } from "document-model";
import { latestVersion, supportedVersions } from "./versions.js";

export const grantPoolUpgradeManifest: UpgradeManifest<
  typeof supportedVersions
> = {
  documentType: "rfp-hub/grant-pool",
  latestVersion,
  supportedVersions,
  upgrades: {},
};
