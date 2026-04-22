import type { DocumentDispatch } from "@powerhousedao/reactor-browser";
import {
  useDocumentById,
  useDocumentsInSelectedDrive,
  useDocumentsInSelectedFolder,
  useSelectedDocument,
} from "@powerhousedao/reactor-browser";
import type {
  GrantApplicationAction,
  GrantApplicationDocument,
} from "document-models/grant-application/v1";
import {
  assertIsGrantApplicationDocument,
  isGrantApplicationDocument,
} from "./gen/document-schema.js";

/** Hook to get a GrantApplication document by its id */
export function useGrantApplicationDocumentById(
  documentId: string | null | undefined,
):
  | [GrantApplicationDocument, DocumentDispatch<GrantApplicationAction>]
  | [undefined, undefined] {
  const [document, dispatch] = useDocumentById(documentId);
  if (!isGrantApplicationDocument(document)) return [undefined, undefined];
  return [document, dispatch];
}

/** Hook to get the selected GrantApplication document */
export function useSelectedGrantApplicationDocument(): [
  GrantApplicationDocument,
  DocumentDispatch<GrantApplicationAction>,
] {
  const [document, dispatch] = useSelectedDocument();

  assertIsGrantApplicationDocument(document);
  return [document, dispatch] as const;
}

/** Hook to get all GrantApplication documents in the selected drive */
export function useGrantApplicationDocumentsInSelectedDrive() {
  const documentsInSelectedDrive = useDocumentsInSelectedDrive();
  return documentsInSelectedDrive?.filter(isGrantApplicationDocument);
}

/** Hook to get all GrantApplication documents in the selected folder */
export function useGrantApplicationDocumentsInSelectedFolder() {
  const documentsInSelectedFolder = useDocumentsInSelectedFolder();
  return documentsInSelectedFolder?.filter(isGrantApplicationDocument);
}
