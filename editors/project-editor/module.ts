
import type { EditorModule } from "document-model";
import { lazy } from "react";

/** Document editor module for the "["rfp-hub/project"]" document type */
export const ProjectEditor: EditorModule = {
    Component: lazy(() => import("./editor.js")),
    documentTypes: ["rfp-hub/project"],
    config: {
        id: "project-editor",
        name: "Project Editor",
    },
};
