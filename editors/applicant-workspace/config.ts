import type { PHAppConfig } from "@powerhousedao/reactor-browser";

/** Editor config for the <%= pascalCaseAppName %> */
export const editorConfig: PHAppConfig = {
  isDragAndDropEnabled: true,
  allowedDocumentTypes: ["rfp-hub/project", "rfp-hub/grant-application"],
};
