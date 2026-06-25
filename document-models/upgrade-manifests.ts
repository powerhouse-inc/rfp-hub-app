/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import type { UpgradeManifest } from "document-model";
import { governanceUpgradeManifest } from "document-models/governance/upgrades";
import { grantApplicationUpgradeManifest } from "document-models/grant-application/upgrades";
import { grantPoolUpgradeManifest } from "document-models/grant-pool/upgrades";
import { grantSystemUpgradeManifest } from "document-models/grant-system/upgrades";
import { projectUpgradeManifest } from "document-models/project/upgrades";

export const upgradeManifests: UpgradeManifest<readonly number[]>[] = [
  governanceUpgradeManifest,
  grantApplicationUpgradeManifest,
  grantPoolUpgradeManifest,
  grantSystemUpgradeManifest,
  projectUpgradeManifest,
];
