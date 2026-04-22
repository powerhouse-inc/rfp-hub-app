
import type { EditorModule } from "document-model";
import { lazy } from "react";

/** Document editor module for the "["powerhouse/document-drive"]" document type */
export const FunderBackOffice: EditorModule = {
    Component: lazy(() => import("./editor.js")),
    documentTypes: ["powerhouse/document-drive"],
    config: {
        id: "funder-back-office",
        name: "Funder Back Office",
    },
};
