import type { DocumentDispatch } from "@powerhousedao/reactor-browser";
import {
  useDocumentById,
  useDocumentsInSelectedDrive,
  useDocumentsInSelectedFolder,
  useSelectedDocument,
} from "@powerhousedao/reactor-browser";
import type {
  GovernanceAction,
  GovernanceDocument,
} from "document-models/governance/v1";
import {
  assertIsGovernanceDocument,
  isGovernanceDocument,
} from "./gen/document-schema.js";

/** Hook to get a Governance document by its id */
export function useGovernanceDocumentById(
  documentId: string | null | undefined,
):
  | [GovernanceDocument, DocumentDispatch<GovernanceAction>]
  | [undefined, undefined] {
  const [document, dispatch] = useDocumentById(documentId);
  if (!isGovernanceDocument(document)) return [undefined, undefined];
  return [document, dispatch];
}

/** Hook to get the selected Governance document */
export function useSelectedGovernanceDocument(): [
  GovernanceDocument,
  DocumentDispatch<GovernanceAction>,
] {
  const [document, dispatch] = useSelectedDocument();

  assertIsGovernanceDocument(document);
  return [document, dispatch] as const;
}

/** Hook to get all Governance documents in the selected drive */
export function useGovernanceDocumentsInSelectedDrive() {
  const documentsInSelectedDrive = useDocumentsInSelectedDrive();
  return documentsInSelectedDrive?.filter(isGovernanceDocument);
}

/** Hook to get all Governance documents in the selected folder */
export function useGovernanceDocumentsInSelectedFolder() {
  const documentsInSelectedFolder = useDocumentsInSelectedFolder();
  return documentsInSelectedFolder?.filter(isGovernanceDocument);
}
