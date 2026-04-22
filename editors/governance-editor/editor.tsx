import { DocumentToolbar } from "@powerhousedao/design-system/connect";
import { generateId } from "document-model";
import { useCallback } from "react";
import {
  useSelectedGovernanceDocument,
  actions,
} from "document-models/governance";
import type { GovernanceState } from "document-models/governance";
import "../load-design-tokens.js";
import { GovernanceHeader } from "./components/GovernanceHeader.js";
import { DisputesSection } from "./components/DisputesSection.js";
import { RfcsSection } from "./components/RfcsSection.js";
import { PoliciesSection } from "./components/PoliciesSection.js";
import { PublisherDecisionsSection } from "./components/PublisherDecisionsSection.js";

type DisputeKind =
  | "DUPLICATE_CLAIM"
  | "INACCURATE_ENTRY"
  | "PUBLISHER_CONDUCT"
  | "REVIEW_DECISION"
  | "POLICY_VIOLATION"
  | "OTHER";

type PublisherDecisionKind =
  | "APPROVED"
  | "REVOKED"
  | "SUSPENDED"
  | "REINSTATED";

export default function Editor() {
  const [document, dispatch] = useSelectedGovernanceDocument();

  // Disputes
  const fileDispute = useCallback(
    (
      filedBy: string,
      subjectRef: string,
      summary: string,
      disputeKind: DisputeKind,
    ) =>
      dispatch(
        actions.fileDispute({
          id: generateId(),
          disputeKind,
          subjectRef,
          filedBy,
          filedAt: new Date().toISOString(),
          summary,
        }),
      ),
    [dispatch],
  );
  const assignInvestigator = useCallback(
    (id: string, assignedTo: string) =>
      dispatch(actions.assignInvestigator({ id, assignedTo })),
    [dispatch],
  );
  const resolveDispute = useCallback(
    (id: string, resolution: string) =>
      dispatch(
        actions.resolveDispute({
          id,
          resolvedAt: new Date().toISOString(),
          resolution,
        }),
      ),
    [dispatch],
  );
  const dismissDispute = useCallback(
    (id: string, reason: string) =>
      dispatch(
        actions.dismissDispute({
          id,
          dismissedAt: new Date().toISOString(),
          reason,
        }),
      ),
    [dispatch],
  );
  const appealDispute = useCallback(
    (id: string, appealReason: string) =>
      dispatch(
        actions.appealDispute({
          id,
          appealAt: new Date().toISOString(),
          appealReason,
        }),
      ),
    [dispatch],
  );

  // RFCs
  const proposeRfc = useCallback(
    (title: string, summary: string, author: string) =>
      dispatch(
        actions.proposeRfc({
          id: generateId(),
          title,
          summary,
          author,
          proposedAt: new Date().toISOString(),
        }),
      ),
    [dispatch],
  );
  const startRfcReview = useCallback(
    (id: string) => dispatch(actions.startRfcReview({ id })),
    [dispatch],
  );
  const ratifyRfc = useCallback(
    (id: string) =>
      dispatch(
        actions.ratifyRfc({ id, ratifiedAt: new Date().toISOString() }),
      ),
    [dispatch],
  );
  const implementRfc = useCallback(
    (id: string) =>
      dispatch(
        actions.implementRfc({
          id,
          implementedAt: new Date().toISOString(),
        }),
      ),
    [dispatch],
  );
  const rejectRfc = useCallback(
    (id: string) => dispatch(actions.rejectRfc({ id })),
    [dispatch],
  );
  const withdrawRfc = useCallback(
    (id: string) => dispatch(actions.withdrawRfc({ id })),
    [dispatch],
  );

  // Policies
  const publishPolicy = useCallback(
    (name: string, summary: string, content: string) =>
      dispatch(
        actions.publishPolicy({
          id: generateId(),
          name,
          summary,
          content,
          effectiveFrom: new Date().toISOString(),
        }),
      ),
    [dispatch],
  );
  const supersedePolicy = useCallback(
    (id: string, supersededBy: string) =>
      dispatch(
        actions.supersedePolicy({
          id,
          supersededAt: new Date().toISOString(),
          supersededBy,
        }),
      ),
    [dispatch],
  );

  // Publisher decisions
  const recordPublisherDecision = useCallback(
    (
      grantSystemRef: string,
      decision: PublisherDecisionKind,
      decidedBy: string,
      reason: string,
    ) =>
      dispatch(
        actions.recordPublisherDecision({
          id: generateId(),
          grantSystemRef,
          decision,
          decidedBy,
          decidedAt: new Date().toISOString(),
          reason: reason || null,
        }),
      ),
    [dispatch],
  );

  if (!document) return null;
  const state = document.state.global as GovernanceState;

  return (
    <div className="rfp-scope">
      <DocumentToolbar />
      <div className="rfp-page">
        <div className="rfp-page-inner">
          <GovernanceHeader state={state} />
          <DisputesSection
            state={state}
            on={{
              fileDispute,
              assignInvestigator,
              resolveDispute,
              dismissDispute,
              appealDispute,
            }}
          />
          <RfcsSection
            state={state}
            on={{
              proposeRfc,
              startRfcReview,
              ratifyRfc,
              implementRfc,
              rejectRfc,
              withdrawRfc,
            }}
          />
          <PoliciesSection
            state={state}
            on={{ publishPolicy, supersedePolicy }}
          />
          <PublisherDecisionsSection
            state={state}
            on={{ recordPublisherDecision }}
          />
        </div>
      </div>
    </div>
  );
}
