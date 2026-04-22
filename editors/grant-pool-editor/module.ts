
import type { EditorModule } from "document-model";
import { lazy } from "react";

/** Document editor module for the "["rfp-hub/grant-pool"]" document type */
export const GrantPoolEditor: EditorModule = {
    Component: lazy(() => import("./editor.js")),
    documentTypes: ["rfp-hub/grant-pool"],
    config: {
        id: "grant-pool-editor",
        name: "Grant Pool Editor",
    },
};
