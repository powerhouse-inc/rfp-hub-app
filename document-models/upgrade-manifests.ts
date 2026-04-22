import type { UpgradeManifest } from "document-model";
import { governanceUpgradeManifest } from "./governance/upgrades/upgrade-manifest.js";
import { grantApplicationUpgradeManifest } from "./grant-application/upgrades/upgrade-manifest.js";
import { grantSystemUpgradeManifest } from "./grant-system/upgrades/upgrade-manifest.js";
import { projectUpgradeManifest } from "./project/upgrades/upgrade-manifest.js";

export const upgradeManifests: UpgradeManifest<readonly number[]>[] = [
  governanceUpgradeManifest,
  grantApplicationUpgradeManifest,
  grantSystemUpgradeManifest,
  projectUpgradeManifest,
];
