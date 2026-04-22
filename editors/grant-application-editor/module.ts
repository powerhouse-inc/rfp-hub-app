
import type { EditorModule } from "document-model";
import { lazy } from "react";

/** Document editor module for the "["rfp-hub/grant-application"]" document type */
export const GrantApplicationEditor: EditorModule = {
    Component: lazy(() => import("./editor.js")),
    documentTypes: ["rfp-hub/grant-application"],
    config: {
        id: "grant-application-editor",
        name: "Grant Application Editor",
    },
};
