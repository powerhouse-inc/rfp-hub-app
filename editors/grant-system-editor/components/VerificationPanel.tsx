import { useState } from "react";
import type { GrantSystemState } from "document-models/grant-system";

type Props = {
  state: GrantSystemState;
  onSetPublisherWallet: (wallet: string) => void;
  onRequestVerification: () => void;
  onApproveVerification: (
    verifiedBy: string,
    method: "MANUAL_REVIEW" | "DOMAIN_VERIFICATION" | "WALLET_SIGNATURE" | "THIRD_PARTY_ATTESTATION",
  ) => void;
  onRejectVerification: (reason: string) => void;
  onSuspendVerification: (reason: string) => void;
  onRevokeVerification: (reason: string) => void;
  onReinstateVerification: (reinstatedBy: string) => void;
};

export function VerificationPanel(p: Props) {
  const [verifier, setVerifier] = useState("");
  const [method, setMethod] =
    useState<Parameters<Props["onApproveVerification"]>[1]>("MANUAL_REVIEW");
  const [rejectReason, setRejectReason] = useState("");
  const [suspendReason, setSuspendReason] = useState("");
  const [revocationReason, setRevocationReason] = useState("");
  const [reinstatedBy, setReinstatedBy] = useState("");

  const canRequest = p.state.verificationState === "UNVERIFIED";
  const canApprove = p.state.verificationState === "PENDING_REVIEW";
  const canReject = p.state.verificationState === "PENDING_REVIEW";
  const canSuspend = p.state.verificationState === "VERIFIED";
  const canRevoke = p.state.verificationState === "VERIFIED";
  const canReinstate =
    p.state.verificationState === "SUSPENDED" ||
    p.state.verificationState === "REVOKED";

  return (
    <section className="rfp-card rfp-section">
      <div className="rfp-col">
        <h2 className="rfp-section-subtitle">Verification</h2>
        <p className="rfp-hint">
          Publisher verification lifecycle for the RFP Hub allowlist.
        </p>
      </div>
      <hr className="rfp-divider" />

      <label className="rfp-field">
        <span className="rfp-label">Publisher wallet (authoritative signer)</span>
        <input
          className="rfp-input"
          defaultValue={p.state.publisherWallet ?? ""}
          placeholder="0x…"
          onBlur={(e) => {
            const v = e.target.value.trim();
            if (v) p.onSetPublisherWallet(v);
          }}
        />
      </label>

      <div className="rfp-row" style={{ gap: 12 }}>
        <button
          className="rfp-btn-primary"
          disabled={!canRequest}
          onClick={p.onRequestVerification}
        >
          Request verification
        </button>
      </div>

      {canApprove ? (
        <div className="rfp-card" style={{ background: "#fff" }}>
          <div className="rfp-section">
            <span className="rfp-label">Approve verification</span>
            <div className="rfp-grid-2">
              <label className="rfp-field">
                <span className="rfp-label">Verifier DID</span>
                <input
                  className="rfp-input"
                  value={verifier}
                  onChange={(e) => setVerifier(e.target.value)}
                  placeholder="did:pkh:eip155:1:0x…"
                />
              </label>
              <label className="rfp-field">
                <span className="rfp-label">Method</span>
                <select
                  className="rfp-select"
                  value={method}
                  onChange={(e) =>
                    setMethod(
                      e.target.value as Parameters<
                        Props["onApproveVerification"]
                      >[1],
                    )
                  }
                >
                  <option value="MANUAL_REVIEW">Manual review</option>
                  <option value="DOMAIN_VERIFICATION">Domain verification</option>
                  <option value="WALLET_SIGNATURE">Wallet signature</option>
                  <option value="THIRD_PARTY_ATTESTATION">
                    Third-party attestation
                  </option>
                </select>
              </label>
            </div>
            <div className="rfp-row" style={{ gap: 8, flexWrap: "wrap" }}>
              <button
                className="rfp-btn-primary"
                disabled={!verifier.trim()}
                onClick={() => {
                  p.onApproveVerification(verifier.trim(), method);
                  setVerifier("");
                }}
              >
                Approve
              </button>
              {canReject ? (
                <button
                  className="rfp-btn-secondary"
                  disabled={!rejectReason.trim()}
                  onClick={() => {
                    p.onRejectVerification(rejectReason.trim());
                    setRejectReason("");
                  }}
                  style={{ color: "var(--rfp-error)" }}
                >
                  Reject
                </button>
              ) : null}
            </div>
            {canReject ? (
              <label className="rfp-field">
                <span className="rfp-label">Rejection reason</span>
                <input
                  className="rfp-input"
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  placeholder="Why rejecting"
                />
              </label>
            ) : null}
          </div>
        </div>
      ) : null}

      {canSuspend || canRevoke ? (
        <div className="rfp-card" style={{ background: "#fff" }}>
          <div className="rfp-section">
            <span className="rfp-label">Suspend / Revoke</span>
            {canSuspend ? (
              <>
                <label className="rfp-field">
                  <span className="rfp-label">Suspension reason</span>
                  <input
                    className="rfp-input"
                    value={suspendReason}
                    onChange={(e) => setSuspendReason(e.target.value)}
                    placeholder="Reason for suspension"
                  />
                </label>
                <button
                  className="rfp-btn-secondary"
                  disabled={!suspendReason.trim()}
                  onClick={() => {
                    p.onSuspendVerification(suspendReason.trim());
                    setSuspendReason("");
                  }}
                  style={{ alignSelf: "flex-start" }}
                >
                  Suspend
                </button>
              </>
            ) : null}
            {canRevoke ? (
              <>
                <label className="rfp-field">
                  <span className="rfp-label">Revocation reason</span>
                  <textarea
                    className="rfp-textarea"
                    value={revocationReason}
                    onChange={(e) => setRevocationReason(e.target.value)}
                    placeholder="Why is verification being revoked?"
                  />
                </label>
                <button
                  className="rfp-btn-secondary"
                  disabled={!revocationReason.trim()}
                  onClick={() => {
                    p.onRevokeVerification(revocationReason.trim());
                    setRevocationReason("");
                  }}
                  style={{
                    color: "var(--rfp-error)",
                    alignSelf: "flex-start",
                  }}
                >
                  Revoke
                </button>
              </>
            ) : null}
          </div>
        </div>
      ) : null}

      {canReinstate ? (
        <div className="rfp-card" style={{ background: "#fff" }}>
          <div className="rfp-section">
            <span className="rfp-label">Reinstate verification</span>
            <label className="rfp-field">
              <span className="rfp-label">Reinstated by (DID)</span>
              <input
                className="rfp-input"
                value={reinstatedBy}
                onChange={(e) => setReinstatedBy(e.target.value)}
                placeholder="did:pkh:eip155:1:0x…"
              />
            </label>
            <button
              className="rfp-btn-primary"
              disabled={!reinstatedBy.trim()}
              onClick={() => {
                p.onReinstateVerification(reinstatedBy.trim());
                setReinstatedBy("");
              }}
              style={{ alignSelf: "flex-start" }}
            >
              Reinstate
            </button>
          </div>
        </div>
      ) : null}

      {p.state.revokedAt || p.state.revocationReason ? (
        <p className="rfp-hint">
          {p.state.revokedAt
            ? `Revoked/suspended ${new Date(p.state.revokedAt).toLocaleString()}`
            : ""}
          {p.state.revocationReason ? ` · ${p.state.revocationReason}` : ""}
        </p>
      ) : null}

      {p.state.verifiedAt ? (
        <p className="rfp-hint">
          Verified{" "}
          {new Date(p.state.verifiedAt).toLocaleString()}
          {p.state.verifiedBy ? ` by ${p.state.verifiedBy}` : ""}
          {p.state.verificationMethod
            ? ` via ${p.state.verificationMethod.toLowerCase().replace(/_/g, " ")}`
            : ""}
        </p>
      ) : null}
    </section>
  );
}
