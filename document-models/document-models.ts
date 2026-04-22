import type { DocumentModelModule } from "document-model";
import { Governance as GovernanceV1 } from "./governance/v1/module.js";
import { GrantApplication as GrantApplicationV1 } from "./grant-application/v1/module.js";
import { GrantPool as GrantPoolV1 } from "./grant-pool/v1/module.js";
import { GrantSystem as GrantSystemV1 } from "./grant-system/v1/module.js";
import { Project as ProjectV1 } from "./project/v1/module.js";

export const documentModels: DocumentModelModule<any>[] = [
  GovernanceV1,
  GrantApplicationV1,
  GrantPoolV1,
  GrantSystemV1,
  ProjectV1,
];
