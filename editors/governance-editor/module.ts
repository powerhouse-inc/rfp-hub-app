
import type { EditorModule } from "document-model";
import { lazy } from "react";

/** Document editor module for the "["rfp-hub/governance"]" document type */
export const GovernanceEditor: EditorModule = {
    Component: lazy(() => import("./editor.js")),
    documentTypes: ["rfp-hub/governance"],
    config: {
        id: "governance-editor",
        name: "Governance Editor",
    },
};
