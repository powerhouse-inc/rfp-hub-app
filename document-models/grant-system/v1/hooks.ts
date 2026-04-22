import type { DocumentDispatch } from "@powerhousedao/reactor-browser";
import {
  useDocumentById,
  useDocumentsInSelectedDrive,
  useDocumentsInSelectedFolder,
  useSelectedDocument,
} from "@powerhousedao/reactor-browser";
import type {
  GrantSystemAction,
  GrantSystemDocument,
} from "document-models/grant-system/v1";
import {
  assertIsGrantSystemDocument,
  isGrantSystemDocument,
} from "./gen/document-schema.js";

/** Hook to get a GrantSystem document by its id */
export function useGrantSystemDocumentById(
  documentId: string | null | undefined,
):
  | [GrantSystemDocument, DocumentDispatch<GrantSystemAction>]
  | [undefined, undefined] {
  const [document, dispatch] = useDocumentById(documentId);
  if (!isGrantSystemDocument(document)) return [undefined, undefined];
  return [document, dispatch];
}

/** Hook to get the selected GrantSystem document */
export function useSelectedGrantSystemDocument(): [
  GrantSystemDocument,
  DocumentDispatch<GrantSystemAction>,
] {
  const [document, dispatch] = useSelectedDocument();

  assertIsGrantSystemDocument(document);
  return [document, dispatch] as const;
}

/** Hook to get all GrantSystem documents in the selected drive */
export function useGrantSystemDocumentsInSelectedDrive() {
  const documentsInSelectedDrive = useDocumentsInSelectedDrive();
  return documentsInSelectedDrive?.filter(isGrantSystemDocument);
}

/** Hook to get all GrantSystem documents in the selected folder */
export function useGrantSystemDocumentsInSelectedFolder() {
  const documentsInSelectedFolder = useDocumentsInSelectedFolder();
  return documentsInSelectedFolder?.filter(isGrantSystemDocument);
}
