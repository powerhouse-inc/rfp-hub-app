import type { EditorModule } from "document-model";
import { ApplicantWorkspace } from "./applicant-workspace/module.js";
import { FunderBackOffice } from "./funder-back-office/module.js";
import { GovernanceEditor } from "./governance-editor/module.js";
import { GrantApplicationEditor } from "./grant-application-editor/module.js";
import { GrantPoolEditor } from "./grant-pool-editor/module.js";
import { GrantSystemEditor } from "./grant-system-editor/module.js";
import { ProjectEditor } from "./project-editor/module.js";

export const editors: EditorModule[] = [
  ApplicantWorkspace,
  FunderBackOffice,
  GovernanceEditor,
  GrantApplicationEditor,
  GrantPoolEditor,
  GrantSystemEditor,
  ProjectEditor,
];
