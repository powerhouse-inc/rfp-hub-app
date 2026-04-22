import type { PHAppConfig } from "@powerhousedao/reactor-browser";

/** Editor config for the <%= pascalCaseAppName %> */
export const editorConfig: PHAppConfig = {
  isDragAndDropEnabled: true,
  allowedDocumentTypes: [
    "rfp-hub/grant-system",
    "rfp-hub/grant-pool",
    "rfp-hub/grant-application",
    "rfp-hub/governance",
  ],
};
