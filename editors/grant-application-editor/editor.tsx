import { DocumentToolbar } from "@powerhousedao/design-system/connect";
import { generateId } from "document-model";
import { useCallback } from "react";
import {
  useSelectedGrantApplicationDocument,
  actions,
} from "document-models/grant-application";
import type { GrantApplicationState } from "document-models/grant-application";
import "../design-tokens.css";
import { ApplicationHeader } from "./components/ApplicationHeader.js";
import { ApplicationContent } from "./components/ApplicationContent.js";
import { ApplicationMeta } from "./components/ApplicationMeta.js";
import { ApplicationSocials } from "./components/ApplicationSocials.js";
import { ApplicationFunding } from "./components/ApplicationFunding.js";
import { ApplicationPayouts } from "./components/ApplicationPayouts.js";
import { ApplicationExtensions } from "./components/ApplicationExtensions.js";
import { ApplicantActions } from "./components/ApplicantActions.js";
import { ReviewerActions } from "./components/ReviewerActions.js";
import { ReviewerFeedbackCard } from "./components/ReviewerFeedbackCard.js";

export default function Editor() {
  const [document, dispatch] = useSelectedGrantApplicationDocument();

  // Content
  const setContent = useCallback(
    (contentURI: string) =>
      dispatch(actions.setAppContentUri({ contentURI })),
    [dispatch],
  );
  const setDiscussions = useCallback(
    (discussionsTo: string) =>
      dispatch(actions.setDiscussionsTo({ discussionsTo })),
    [dispatch],
  );

  // Meta
  const setLicenseUri = useCallback(
    (licenseURI: string) =>
      dispatch(actions.setAppLicenseUri({ licenseURI })),
    [dispatch],
  );
  const setIsInactive = useCallback(
    (v: boolean) => dispatch(actions.setIsInactive({ isInactive: v })),
    [dispatch],
  );
  const setCompletionRate = useCallback(
    (v: number | null) =>
      dispatch(actions.setCompletionRate({ applicationCompletionRate: v })),
    [dispatch],
  );

  // Socials
  const addSocial = useCallback(
    (platform: string, url: string) =>
      dispatch(
        actions.addAppSocial({ id: generateId(), platform, url }),
      ),
    [dispatch],
  );
  const removeSocial = useCallback(
    (id: string) => dispatch(actions.removeAppSocial({ id })),
    [dispatch],
  );

  // Funding
  const addFundsAsked = useCallback(
    (value: number, unit: string) =>
      dispatch(
        actions.addFundsAsked({
          id: generateId(),
          amount: { value, unit },
        }),
      ),
    [dispatch],
  );
  const removeFundsAsked = useCallback(
    (id: string) => dispatch(actions.removeFundsAsked({ id })),
    [dispatch],
  );
  const setFundsAskedUsd = useCallback(
    (v: { value?: number | null; unit?: string | null }) => {
      if (v.value == null || !v.unit) return;
      dispatch(
        actions.setFundsAskedUsd({
          fundsAskedInUSD: { value: v.value, unit: v.unit },
        }),
      );
    },
    [dispatch],
  );
  const addFundsApproved = useCallback(
    (value: number, unit: string) =>
      dispatch(
        actions.addFundsApproved({
          id: generateId(),
          amount: { value, unit },
        }),
      ),
    [dispatch],
  );
  const setFundsApprovedUsd = useCallback(
    (v: { value?: number | null; unit?: string | null }) => {
      if (v.value == null || !v.unit) return;
      dispatch(
        actions.setFundsApprovedUsd({
          fundsApprovedInUSD: { value: v.value, unit: v.unit },
        }),
      );
    },
    [dispatch],
  );
  const setPayoutAddress = useCallback(
    (addressType: string, value: string) =>
      dispatch(actions.setPayoutAddress({ addressType, value })),
    [dispatch],
  );
  const setPaymentTerm = useCallback(
    (paymentTerm: GrantApplicationState["paymentTerm"]) =>
      paymentTerm && dispatch(actions.setPaymentTerm({ paymentTerm })),
    [dispatch],
  );

  // Payouts
  const recordPayout = useCallback(
    (payoutType: string, value: string, proof: string) =>
      dispatch(
        actions.recordPayout({
          id: generateId(),
          payoutType,
          value,
          proof: proof || null,
          timestamp: new Date().toISOString(),
        }),
      ),
    [dispatch],
  );
  const markCompleted = useCallback(
    () =>
      dispatch(
        actions.markCompleted({ completedAt: new Date().toISOString() }),
      ),
    [dispatch],
  );

  // Extensions
  const setExtensions = useCallback(
    (extensions: string) =>
      dispatch(actions.setAppExtensions({ extensions })),
    [dispatch],
  );

  // Lifecycle — applicant
  const submit = useCallback(
    (identifier: string) =>
      dispatch(
        actions.submitApplication({
          submittedAt: new Date().toISOString(),
          submitterType: "COMMUNITY",
          identifier,
        }),
      ),
    [dispatch],
  );
  const markRevised = useCallback(
    () =>
      dispatch(actions.markRevised({ revisedAt: new Date().toISOString() })),
    [dispatch],
  );
  const withdraw = useCallback(
    (reason: string) =>
      dispatch(
        actions.withdrawApplication({
          withdrawnAt: new Date().toISOString(),
          reason,
        }),
      ),
    [dispatch],
  );

  // Lifecycle — reviewer
  const openApplication = useCallback(
    () =>
      dispatch(
        actions.openApplication({ openedAt: new Date().toISOString() }),
      ),
    [dispatch],
  );
  const startReview = useCallback(
    (reviewerDid: string) =>
      dispatch(
        actions.startReview({
          reviewerDid,
          startedAt: new Date().toISOString(),
        }),
      ),
    [dispatch],
  );
  const requestRevision = useCallback(
    (feedbackNotes: string) =>
      dispatch(
        actions.requestRevision({
          feedbackNotes,
          requestedAt: new Date().toISOString(),
        }),
      ),
    [dispatch],
  );
  const approve = useCallback(
    (reviewerDid: string) =>
      dispatch(
        actions.approveApplication({
          approvedAt: new Date().toISOString(),
          reviewerDid,
        }),
      ),
    [dispatch],
  );
  const conditionallyApprove = useCallback(
    (reviewerDid: string, conditions: string) =>
      dispatch(
        actions.conditionallyApprove({
          approvedAt: new Date().toISOString(),
          reviewerDid,
          conditions,
        }),
      ),
    [dispatch],
  );
  const reject = useCallback(
    (reviewerDid: string, reason: string) =>
      dispatch(
        actions.rejectApplication({
          rejectedAt: new Date().toISOString(),
          reviewerDid,
          reason,
        }),
      ),
    [dispatch],
  );

  if (!document) return null;
  const state = document.state.global as GrantApplicationState;

  return (
    <div className="rfp-scope">
      <DocumentToolbar />
      <div className="rfp-page">
        <div className="rfp-page-inner">
          <ApplicationHeader state={state} />
          {state.feedbackNotes ? (
            <ReviewerFeedbackCard feedback={state.feedbackNotes} />
          ) : null}
          <ApplicationMeta
            state={state}
            on={{ setLicenseUri, setIsInactive, setCompletionRate }}
          />
          <ApplicationContent
            state={state}
            on={{ setContent, setDiscussions }}
          />
          <ApplicationSocials
            state={state}
            on={{ addSocial, removeSocial }}
          />
          <ApplicationFunding
            state={state}
            on={{
              addFundsAsked,
              removeFundsAsked,
              setFundsAskedUsd,
              addFundsApproved,
              setFundsApprovedUsd,
              setPayoutAddress,
              setPaymentTerm,
            }}
          />
          <ApplicantActions
            state={state}
            on={{ submit, markRevised, withdraw }}
          />
          <ReviewerActions
            state={state}
            on={{
              openApplication,
              startReview,
              requestRevision,
              approve,
              conditionallyApprove,
              reject,
            }}
          />
          <ApplicationPayouts
            state={state}
            on={{ recordPayout, markCompleted }}
          />
          <ApplicationExtensions
            state={state}
            on={{ setExtensions }}
          />
        </div>
      </div>
    </div>
  );
}
