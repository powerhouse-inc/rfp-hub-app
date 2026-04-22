import type { UpgradeManifest } from "document-model";
import { latestVersion, supportedVersions } from "./versions.js";

export const governanceUpgradeManifest: UpgradeManifest<
  typeof supportedVersions
> = {
  documentType: "rfp-hub/governance",
  latestVersion,
  supportedVersions,
  upgrades: {},
};
