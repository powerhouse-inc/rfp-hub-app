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
  onRevokeVerification: (reason: string) => void;
};

export function VerificationPanel(p: Props) {
  const [verifier, setVerifier] = useState("");
  const [method, setMethod] =
    useState<Parameters<Props["onApproveVerification"]>[1]>("MANUAL_REVIEW");
  const [revocationReason, setRevocationReason] = useState("");

  const canRequest = p.state.verificationState === "UNVERIFIED";
  const canApprove = p.state.verificationState === "PENDING_REVIEW";
  const canRevoke = p.state.verificationState === "VERIFIED";

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
          </div>
        </div>
      ) : null}

      {canRevoke ? (
        <div className="rfp-card" style={{ background: "#fff" }}>
          <div className="rfp-section">
            <span className="rfp-label">Revoke verification</span>
            <label className="rfp-field">
              <span className="rfp-label">Reason</span>
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
              style={{ color: "var(--rfp-error)" }}
            >
              Revoke
            </button>
          </div>
        </div>
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
