
import type { EditorModule } from "document-model";
import { lazy } from "react";

/** Document editor module for the "["rfp-hub/grant-system"]" document type */
export const GrantSystemEditor: EditorModule = {
    Component: lazy(() => import("./editor.js")),
    documentTypes: ["rfp-hub/grant-system"],
    config: {
        id: "grant-system-editor",
        name: "Grant System Editor",
    },
};
