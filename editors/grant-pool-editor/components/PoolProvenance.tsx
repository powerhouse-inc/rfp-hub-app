import { useState } from "react";
import type { GrantPoolState } from "document-models/grant-pool";

type SubmitterType = "COMMUNITY" | "VERIFIED_PUBLISHER" | "AUTOMATION";
type VerificationMethod =
  | "MANUAL_REVIEW"
  | "DOMAIN_VERIFICATION"
  | "HTTP_PROBE"
  | "REVIEWER_CONFIRMATION";

type On = {
  setSubmitter: (type: SubmitterType, identifier: string) => void;
  setPublisher: (identifier: string) => void;
  recordVerification: (
    verifiedBy: string,
    method: VerificationMethod,
  ) => void;
  markSupersedes: (phid: string) => void;
  markClaimedFromEntry: (phid: string) => void;
  markDuplicateOf: (phid: string) => void;
};

export function PoolProvenance({
  state,
  on,
}: {
  state: GrantPoolState;
  on: On;
}) {
  const [submitterType, setSubmitterType] =
    useState<SubmitterType>("VERIFIED_PUBLISHER");
  const [submitterId, setSubmitterId] = useState("");
  const [publisherId, setPublisherId] = useState("");
  const [verifierDid, setVerifierDid] = useState("");
  const [verMethod, setVerMethod] =
    useState<VerificationMethod>("MANUAL_REVIEW");
  const [supersedes, setSupersedes] = useState("");
  const [claimedFrom, setClaimedFrom] = useState("");
  const [duplicateOf, setDuplicateOf] = useState("");

  return (
    <section className="rfp-card rfp-section">
      <h2 className="rfp-section-subtitle">Provenance & lineage</h2>
      <hr className="rfp-divider" />

      {/* Current state read-only */}
      <div className="rfp-grid-2">
        <div className="rfp-field">
          <span className="rfp-label">Submitter</span>
          <div className="rfp-hint">
            {state.submitter ? (
              <>
                <span className="rfp-chip">
                  {state.submitter.type.toLowerCase().replace(/_/g, " ")}
                </span>
                <div style={{ marginTop: 4 }}>{state.submitter.identifier}</div>
                <div>
                  {new Date(state.submitter.submittedAt).toLocaleString()}
                </div>
              </>
            ) : (
              "—"
            )}
          </div>
        </div>
        <div className="rfp-field">
          <span className="rfp-label">Publisher</span>
          <div className="rfp-hint">
            {state.publisher ? (
              <>
                {state.publisher.identifier}
                <div>
                  {new Date(state.publisher.publishedAt).toLocaleString()}
                </div>
              </>
            ) : (
              "—"
            )}
          </div>
        </div>
      </div>

      {state.lastVerifiedAt ? (
        <div className="rfp-field">
          <span className="rfp-label">Last verified</span>
          <div className="rfp-hint">
            {new Date(state.lastVerifiedAt).toLocaleString()}
            {state.verificationMethod
              ? ` · via ${state.verificationMethod.toLowerCase().replace(/_/g, " ")}`
              : ""}
            {state.verifiedBy ? ` · by ${state.verifiedBy}` : ""}
          </div>
        </div>
      ) : null}

      <hr className="rfp-divider" />

      {/* Set submitter */}
      <div className="rfp-col">
        <span className="rfp-label">Set submitter</span>
        <div className="rfp-row">
          <select
            className="rfp-select"
            style={{ maxWidth: 180 }}
            value={submitterType}
            onChange={(e) => setSubmitterType(e.target.value as SubmitterType)}
          >
            <option value="COMMUNITY">Community</option>
            <option value="VERIFIED_PUBLISHER">Verified publisher</option>
            <option value="AUTOMATION">Automation</option>
          </select>
          <input
            className="rfp-input"
            style={{ flex: 1 }}
            value={submitterId}
            onChange={(e) => setSubmitterId(e.target.value)}
            placeholder="Identifier (DID or wallet)"
          />
          <button
            className="rfp-btn-secondary"
            disabled={!submitterId.trim()}
            onClick={() => {
              on.setSubmitter(submitterType, submitterId.trim());
              setSubmitterId("");
            }}
          >
            Save
          </button>
        </div>
      </div>

      {/* Set publisher */}
      <div className="rfp-row">
        <input
          className="rfp-input"
          style={{ flex: 1 }}
          value={publisherId}
          onChange={(e) => setPublisherId(e.target.value)}
          placeholder="Publisher identifier"
        />
        <button
          className="rfp-btn-secondary"
          disabled={!publisherId.trim()}
          onClick={() => {
            on.setPublisher(publisherId.trim());
            setPublisherId("");
          }}
        >
          Set publisher
        </button>
      </div>

      {/* Record verification */}
      <div className="rfp-row">
        <input
          className="rfp-input"
          style={{ flex: 1 }}
          value={verifierDid}
          onChange={(e) => setVerifierDid(e.target.value)}
          placeholder="Verifier DID"
        />
        <select
          className="rfp-select"
          style={{ maxWidth: 220 }}
          value={verMethod}
          onChange={(e) =>
            setVerMethod(e.target.value as VerificationMethod)
          }
        >
          <option value="MANUAL_REVIEW">Manual review</option>
          <option value="DOMAIN_VERIFICATION">Domain verification</option>
          <option value="HTTP_PROBE">HTTP probe</option>
          <option value="REVIEWER_CONFIRMATION">Reviewer confirmation</option>
        </select>
        <button
          className="rfp-btn-secondary"
          disabled={!verifierDid.trim()}
          onClick={() => {
            on.recordVerification(verifierDid.trim(), verMethod);
            setVerifierDid("");
          }}
        >
          Record verification
        </button>
      </div>

      <hr className="rfp-divider" />

      {/* Lineage */}
      <div className="rfp-col">
        <span className="rfp-label">Lineage</span>
        <p className="rfp-hint">
          Link this pool to related pool documents by PHID.
        </p>
        <div className="rfp-grid-2">
          <div className="rfp-field">
            <span className="rfp-label">Supersedes</span>
            <div className="rfp-hint">
              Current: {state.supersedes ?? "—"}
            </div>
            <div className="rfp-row">
              <input
                className="rfp-input"
                style={{ flex: 1 }}
                value={supersedes}
                onChange={(e) => setSupersedes(e.target.value)}
                placeholder="PHID of superseded pool"
              />
              <button
                className="rfp-btn-ghost"
                disabled={!supersedes.trim()}
                onClick={() => {
                  on.markSupersedes(supersedes.trim());
                  setSupersedes("");
                }}
              >
                Set
              </button>
            </div>
          </div>
          <div className="rfp-field">
            <span className="rfp-label">Claimed from entry</span>
            <div className="rfp-hint">
              Current: {state.claimedFromEntry ?? "—"}
            </div>
            <div className="rfp-row">
              <input
                className="rfp-input"
                style={{ flex: 1 }}
                value={claimedFrom}
                onChange={(e) => setClaimedFrom(e.target.value)}
                placeholder="PHID of original community entry"
              />
              <button
                className="rfp-btn-ghost"
                disabled={!claimedFrom.trim()}
                onClick={() => {
                  on.markClaimedFromEntry(claimedFrom.trim());
                  setClaimedFrom("");
                }}
              >
                Set
              </button>
            </div>
          </div>
        </div>
        <div className="rfp-field">
          <span className="rfp-label">Duplicate of</span>
          <div className="rfp-hint">
            Current: {state.duplicateOf ?? "—"}
          </div>
          <div className="rfp-row">
            <input
              className="rfp-input"
              style={{ flex: 1 }}
              value={duplicateOf}
              onChange={(e) => setDuplicateOf(e.target.value)}
              placeholder="PHID of canonical pool"
            />
            <button
              className="rfp-btn-ghost"
              disabled={!duplicateOf.trim()}
              onClick={() => {
                on.markDuplicateOf(duplicateOf.trim());
                setDuplicateOf("");
              }}
            >
              Set
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
