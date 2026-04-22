import type { DocumentDispatch } from "@powerhousedao/reactor-browser";
import {
  useDocumentById,
  useDocumentsInSelectedDrive,
  useDocumentsInSelectedFolder,
  useSelectedDocument,
} from "@powerhousedao/reactor-browser";
import type {
  GrantPoolAction,
  GrantPoolDocument,
} from "document-models/grant-pool/v1";
import {
  assertIsGrantPoolDocument,
  isGrantPoolDocument,
} from "./gen/document-schema.js";

/** Hook to get a GrantPool document by its id */
export function useGrantPoolDocumentById(
  documentId: string | null | undefined,
):
  | [GrantPoolDocument, DocumentDispatch<GrantPoolAction>]
  | [undefined, undefined] {
  const [document, dispatch] = useDocumentById(documentId);
  if (!isGrantPoolDocument(document)) return [undefined, undefined];
  return [document, dispatch];
}

/** Hook to get the selected GrantPool document */
export function useSelectedGrantPoolDocument(): [
  GrantPoolDocument,
  DocumentDispatch<GrantPoolAction>,
] {
  const [document, dispatch] = useSelectedDocument();

  assertIsGrantPoolDocument(document);
  return [document, dispatch] as const;
}

/** Hook to get all GrantPool documents in the selected drive */
export function useGrantPoolDocumentsInSelectedDrive() {
  const documentsInSelectedDrive = useDocumentsInSelectedDrive();
  return documentsInSelectedDrive?.filter(isGrantPoolDocument);
}

/** Hook to get all GrantPool documents in the selected folder */
export function useGrantPoolDocumentsInSelectedFolder() {
  const documentsInSelectedFolder = useDocumentsInSelectedFolder();
  return documentsInSelectedFolder?.filter(isGrantPoolDocument);
}
