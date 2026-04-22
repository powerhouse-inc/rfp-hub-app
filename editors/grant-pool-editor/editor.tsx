import { DocumentToolbar } from "@powerhousedao/design-system/connect";
import { generateId } from "document-model";
import { useCallback } from "react";
import {
  useSelectedGrantPoolDocument,
  actions,
} from "document-models/grant-pool";
import type { GrantPoolState } from "document-models/grant-pool";
import "../load-design-tokens.js";
import { PoolHeader } from "./components/PoolHeader.js";
import { PoolBasics } from "./components/PoolBasics.js";
import { PoolReferences } from "./components/PoolReferences.js";
import { PoolFunding } from "./components/PoolFunding.js";
import { PoolFundingDetails } from "./components/PoolFundingDetails.js";
import { PoolSchedule } from "./components/PoolSchedule.js";
import { PoolCriteria } from "./components/PoolCriteria.js";
import { PoolCredentials } from "./components/PoolCredentials.js";
import { PoolContextDocuments } from "./components/PoolContextDocuments.js";
import { PoolClassification } from "./components/PoolClassification.js";
import { PoolSameAs } from "./components/PoolSameAs.js";
import { PoolReviewers } from "./components/PoolReviewers.js";
import { PoolProvenance } from "./components/PoolProvenance.js";
import { PoolPublishPanel } from "./components/PoolPublishPanel.js";
import { PoolExtensions } from "./components/PoolExtensions.js";

export default function Editor() {
  const [document, dispatch] = useSelectedGrantPoolDocument();

  // Basics
  const setPoolName = useCallback(
    (name: string) => dispatch(actions.setPoolName({ name })),
    [dispatch],
  );
  const setDescription = useCallback(
    (description: string) =>
      dispatch(actions.setDescription({ description })),
    [dispatch],
  );
  const setCode = useCallback(
    (code: string) => dispatch(actions.setCode({ code })),
    [dispatch],
  );
  const setBriefingUri = useCallback(
    (uri: string) => dispatch(actions.setBriefingUri({ briefingURI: uri })),
    [dispatch],
  );

  // References (URIs)
  const setGrantSystemRef = useCallback(
    (grantSystemRef: string) =>
      dispatch(actions.setGrantSystemRef({ grantSystemRef })),
    [dispatch],
  );
  const setApplicationsUri = useCallback(
    (applicationsURI: string) =>
      dispatch(actions.setApplicationsUri({ applicationsURI })),
    [dispatch],
  );
  const setGovernanceUri = useCallback(
    (governanceURI: string) =>
      dispatch(actions.setGovernanceUri({ governanceURI })),
    [dispatch],
  );
  const setAttestationIssuersUri = useCallback(
    (attestationIssuersURI: string) =>
      dispatch(actions.setAttestationIssuersUri({ attestationIssuersURI })),
    [dispatch],
  );

  // Funding
  const setFundingMechanism = useCallback(
    (m: GrantPoolState["grantFundingMechanism"]) =>
      m && dispatch(actions.setFundingMechanism({ grantFundingMechanism: m })),
    [dispatch],
  );
  const setTotalPoolSizeUsd = useCallback(
    (v: { value?: number; unit?: string }) => {
      if (v.value == null || !v.unit) return;
      dispatch(
        actions.setTotalPoolSizeUsd({
          totalGrantPoolSizeInUSD: { value: v.value, unit: v.unit },
        }),
      );
    },
    [dispatch],
  );
  const addPoolSizeEntry = useCallback(
    (value: number, unit: string) =>
      dispatch(
        actions.addPoolSizeEntry({
          id: generateId(),
          amount: { value, unit },
        }),
      ),
    [dispatch],
  );
  const removePoolSizeEntry = useCallback(
    (id: string) => dispatch(actions.removePoolSizeEntry({ id })),
    [dispatch],
  );
  const setGrantBounds = useCallback(
    (mv: number, mu: string, Mv: number, Mu: string) =>
      dispatch(
        actions.setGrantBounds({
          minGrantId1: generateId(),
          minGrantAmount1: { value: mv, unit: mu },
          maxGrantId1: generateId(),
          maxGrantAmount1: { value: Mv, unit: Mu },
        }),
      ),
    [dispatch],
  );

  // Schedule + lifecycle
  const setOpenDate = useCallback(
    (d: string) => dispatch(actions.setOpenDate({ openDate: d })),
    [dispatch],
  );
  const setCloseDate = useCallback(
    (d: string) => dispatch(actions.setCloseDate({ closeDate: d })),
    [dispatch],
  );
  const setIsOpen = useCallback(
    (isOpen: boolean) => dispatch(actions.setIsOpen({ isOpen })),
    [dispatch],
  );
  const advanceLifecycle = useCallback(
    (target: GrantPoolState["lifecycle"]) =>
      dispatch(actions.advanceLifecycle({ lifecycle: target })),
    [dispatch],
  );

  // Criteria + credentials + context docs
  const setEligibility = useCallback(
    (v: string) =>
      dispatch(actions.setEligibilityCriteria({ eligibilityCriteria: v })),
    [dispatch],
  );
  const setEvaluation = useCallback(
    (v: string) =>
      dispatch(actions.setEvaluationCriteria({ evaluationCriteria: v })),
    [dispatch],
  );
  const addRequiredCredential = useCallback(
    (credential: string) =>
      dispatch(actions.addRequiredCredential({ credential })),
    [dispatch],
  );
  const removeRequiredCredential = useCallback(
    (credential: string) =>
      dispatch(actions.removeRequiredCredential({ credential })),
    [dispatch],
  );
  const addContextDocument = useCallback(
    (name: string, url: string) =>
      dispatch(
        actions.addContextDocument({ id: generateId(), name, url }),
      ),
    [dispatch],
  );
  const removeContextDocument = useCallback(
    (id: string) => dispatch(actions.removeContextDocument({ id })),
    [dispatch],
  );

  // Classification
  const addCategory = useCallback(
    (category: string) => dispatch(actions.addCategory({ category })),
    [dispatch],
  );
  const removeCategory = useCallback(
    (category: string) => dispatch(actions.removeCategory({ category })),
    [dispatch],
  );
  const addEcosystem = useCallback(
    (ecosystem: string) => dispatch(actions.addEcosystem({ ecosystem })),
    [dispatch],
  );
  const removeEcosystem = useCallback(
    (ecosystem: string) => dispatch(actions.removeEcosystem({ ecosystem })),
    [dispatch],
  );
  const addTag = useCallback(
    (tag: string) => dispatch(actions.addTag({ tag })),
    [dispatch],
  );
  const removeTag = useCallback(
    (tag: string) => dispatch(actions.removeTag({ tag })),
    [dispatch],
  );

  // sameAs
  const addSameAs = useCallback(
    (url: string) => dispatch(actions.addPoolSameAs({ url })),
    [dispatch],
  );
  const removeSameAs = useCallback(
    (url: string) => dispatch(actions.removePoolSameAs({ url })),
    [dispatch],
  );

  // Reviewers
  const addReviewer = useCallback(
    (
      did: string,
      scope: "INTERNAL" | "EXTERNAL",
      reviewerType: "HUMAN" | "GROUP" | "AI",
      name: string,
    ) =>
      dispatch(
        actions.addReviewer({
          id: generateId(),
          did,
          scope,
          reviewerType,
          name,
        }),
      ),
    [dispatch],
  );
  const removeReviewer = useCallback(
    (id: string) => dispatch(actions.removeReviewer({ id })),
    [dispatch],
  );

  // Provenance
  const setSubmitter = useCallback(
    (
      type: "COMMUNITY" | "VERIFIED_PUBLISHER" | "AUTOMATION",
      identifier: string,
    ) =>
      dispatch(
        actions.setSubmitter({
          type,
          identifier,
          submittedAt: new Date().toISOString(),
        }),
      ),
    [dispatch],
  );
  const setPublisher = useCallback(
    (identifier: string) =>
      dispatch(
        actions.setPublisher({
          identifier,
          publishedAt: new Date().toISOString(),
        }),
      ),
    [dispatch],
  );
  const recordVerification = useCallback(
    (
      verifiedBy: string,
      verificationMethod:
        | "MANUAL_REVIEW"
        | "DOMAIN_VERIFICATION"
        | "HTTP_PROBE"
        | "REVIEWER_CONFIRMATION",
    ) =>
      dispatch(
        actions.recordVerification({
          verifiedBy,
          verificationMethod,
          verifiedAt: new Date().toISOString(),
        }),
      ),
    [dispatch],
  );
  const markSupersedes = useCallback(
    (supersedes: string) => dispatch(actions.markSupersedes({ supersedes })),
    [dispatch],
  );
  const markClaimedFromEntry = useCallback(
    (claimedFromEntry: string) =>
      dispatch(actions.markClaimedFromEntry({ claimedFromEntry })),
    [dispatch],
  );
  const markDuplicateOf = useCallback(
    (duplicateOf: string) =>
      dispatch(actions.markDuplicateOf({ duplicateOf })),
    [dispatch],
  );

  // Publish / lifecycle actions
  const publishPool = useCallback(
    () =>
      dispatch(
        actions.publishPool({ publishedAt: new Date().toISOString() }),
      ),
    [dispatch],
  );
  const closePool = useCallback(
    () =>
      dispatch(actions.closePool({ closedAt: new Date().toISOString() })),
    [dispatch],
  );
  const cancelPool = useCallback(
    (reason: string) =>
      dispatch(
        actions.cancelPool({
          cancelledAt: new Date().toISOString(),
          reason,
        }),
      ),
    [dispatch],
  );

  // Extensions
  const setExtensions = useCallback(
    (extensions: string) =>
      dispatch(actions.setPoolExtensions({ extensions })),
    [dispatch],
  );

  if (!document) return null;
  const state = document.state.global as GrantPoolState;

  return (
    <div className="rfp-scope">
      <DocumentToolbar />
      <div className="rfp-page">
        <div className="rfp-page-inner">
          <PoolHeader state={state} />
          <PoolBasics
            state={state}
            on={{ setPoolName, setDescription, setCode, setBriefingUri }}
          />
          <PoolReferences
            state={state}
            on={{
              setGrantSystemRef,
              setApplicationsUri,
              setGovernanceUri,
              setAttestationIssuersUri,
            }}
          />
          <PoolFunding
            state={state}
            on={{ setFundingMechanism, setTotalPoolSizeUsd }}
          />
          <PoolFundingDetails
            state={state}
            on={{ addPoolSizeEntry, removePoolSizeEntry, setGrantBounds }}
          />
          <PoolSchedule
            state={state}
            on={{ setOpenDate, setCloseDate }}
          />
          <PoolCriteria
            state={state}
            on={{ setEligibility, setEvaluation }}
          />
          <PoolCredentials
            state={state}
            on={{ addRequiredCredential, removeRequiredCredential }}
          />
          <PoolContextDocuments
            state={state}
            on={{ addContextDocument, removeContextDocument }}
          />
          <PoolClassification
            state={state}
            on={{
              addCategory,
              removeCategory,
              addEcosystem,
              removeEcosystem,
              addTag,
              removeTag,
            }}
          />
          <PoolSameAs
            state={state}
            on={{ addSameAs, removeSameAs }}
          />
          <PoolReviewers
            state={state}
            on={{ addReviewer, removeReviewer }}
          />
          <PoolProvenance
            state={state}
            on={{
              setSubmitter,
              setPublisher,
              recordVerification,
              markSupersedes,
              markClaimedFromEntry,
              markDuplicateOf,
            }}
          />
          <PoolPublishPanel
            state={state}
            on={{ advanceLifecycle, publishPool, closePool, cancelPool }}
          />
          <PoolExtensions
            state={state}
            on={{ setExtensions }}
          />
        </div>
      </div>
    </div>
  );
}
