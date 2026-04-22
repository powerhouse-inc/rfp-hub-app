import { DocumentToolbar } from "@powerhousedao/design-system/connect";
import { generateId } from "document-model";
import { useCallback } from "react";
import {
  useSelectedGrantSystemDocument,
  actions,
} from "document-models/grant-system";
import type { GrantSystemState } from "document-models/grant-system";
import "../design-tokens.css";
import { OrgProfile } from "./components/OrgProfile.js";
import { ContactPanel } from "./components/ContactPanel.js";
import { LinksPanel } from "./components/LinksPanel.js";
import { VerificationPanel } from "./components/VerificationPanel.js";
import { VerificationBadge } from "./components/VerificationBadge.js";
import { ExtensionsPanel } from "./components/ExtensionsPanel.js";

export default function Editor() {
  const [document, dispatch] = useSelectedGrantSystemDocument();
  if (!document) return null;
  const state = document.state.global as GrantSystemState;

  const onSetOrgName = useCallback(
    (name: string) => dispatch(actions.setOrgName({ name })),
    [dispatch],
  );
  const onSetType = useCallback(
    (type: GrantSystemState["type"]) =>
      type && dispatch(actions.setType({ type })),
    [dispatch],
  );
  const onSetCode = useCallback(
    (code: string) => dispatch(actions.setCode({ code })),
    [dispatch],
  );
  const onSetDescription = useCallback(
    (description: string) =>
      dispatch(actions.setDescription({ description })),
    [dispatch],
  );
  const onSetGrantPoolsUri = useCallback(
    (grantPoolsURI: string) =>
      dispatch(actions.setGrantPoolsUri({ grantPoolsURI })),
    [dispatch],
  );
  const onSetImage = useCallback(
    (image: string) => dispatch(actions.setImage({ image })),
    [dispatch],
  );
  const onSetCoverImage = useCallback(
    (coverImage: string) =>
      dispatch(actions.setCoverImage({ coverImage })),
    [dispatch],
  );
  const onSetEmail = useCallback(
    (email: string) => dispatch(actions.setEmail({ email })),
    [dispatch],
  );
  const onSetContactName = useCallback(
    (contactName: string) =>
      dispatch(actions.setContactName({ contactName })),
    [dispatch],
  );
  const onAddSameAs = useCallback(
    (url: string) => dispatch(actions.addSameAs({ url })),
    [dispatch],
  );
  const onRemoveSameAs = useCallback(
    (url: string) => dispatch(actions.removeSameAs({ url })),
    [dispatch],
  );
  const onAddSocial = useCallback(
    (platform: string, url: string) =>
      dispatch(
        actions.addSocial({
          id: generateId(),
          platform: platform as any,
          url,
        }),
      ),
    [dispatch],
  );
  const onRemoveSocial = useCallback(
    (id: string) => dispatch(actions.removeSocial({ id })),
    [dispatch],
  );
  const onUpdateSocialUrl = useCallback(
    (id: string, url: string) =>
      dispatch(actions.updateSocialUrl({ id, url })),
    [dispatch],
  );
  const onSetExtensions = useCallback(
    (extensions: string) => dispatch(actions.setExtensions({ extensions })),
    [dispatch],
  );
  const onSetPublisherWallet = useCallback(
    (publisherWallet: string) =>
      dispatch(actions.setPublisherWallet({ publisherWallet })),
    [dispatch],
  );
  const onRequestVerification = useCallback(
    () =>
      dispatch(
        actions.requestVerification({ requestedAt: new Date().toISOString() }),
      ),
    [dispatch],
  );
  const onApproveVerification = useCallback(
    (verifiedBy: string, method: any) =>
      dispatch(
        actions.approveVerification({
          verifiedBy,
          method,
          verifiedAt: new Date().toISOString(),
        }),
      ),
    [dispatch],
  );
  const onRejectVerification = useCallback(
    (reason: string) =>
      dispatch(
        actions.rejectVerification({
          reason,
          rejectedAt: new Date().toISOString(),
        }),
      ),
    [dispatch],
  );
  const onSuspendVerification = useCallback(
    (reason: string) =>
      dispatch(
        actions.suspendVerification({
          reason,
          suspendedAt: new Date().toISOString(),
        }),
      ),
    [dispatch],
  );
  const onRevokeVerification = useCallback(
    (reason: string) =>
      dispatch(
        actions.revokeVerification({
          reason,
          revokedAt: new Date().toISOString(),
        }),
      ),
    [dispatch],
  );
  const onReinstateVerification = useCallback(
    (reinstatedBy: string) =>
      dispatch(
        actions.reinstateVerification({
          reinstatedBy,
          verifiedAt: new Date().toISOString(),
        }),
      ),
    [dispatch],
  );

  return (
    <div className="rfp-scope">
      <DocumentToolbar />
      <div className="rfp-page">
        <div className="rfp-page-inner">
          <header className="rfp-header">
            <div className="rfp-header-row">
              <div className="rfp-col">
                <span className="rfp-meta">Grant System · DAOIP-5</span>
                <h1 className="rfp-h1">
                  {state.name || "Unnamed organization"}
                </h1>
              </div>
              <VerificationBadge state={state.verificationState} />
            </div>
            {state.description ? (
              <p className="rfp-body" style={{ maxWidth: 680 }}>
                {state.description}
              </p>
            ) : null}
          </header>

          <OrgProfile
            state={state}
            onSetOrgName={onSetOrgName}
            onSetType={onSetType}
            onSetCode={onSetCode}
            onSetDescription={onSetDescription}
            onSetGrantPoolsUri={onSetGrantPoolsUri}
            onSetImage={onSetImage}
            onSetCoverImage={onSetCoverImage}
          />

          <ContactPanel
            state={state}
            onSetEmail={onSetEmail}
            onSetContactName={onSetContactName}
          />

          <LinksPanel
            state={state}
            onAddSameAs={onAddSameAs}
            onRemoveSameAs={onRemoveSameAs}
            onAddSocial={onAddSocial}
            onRemoveSocial={onRemoveSocial}
            onUpdateSocialUrl={onUpdateSocialUrl}
          />

          <VerificationPanel
            state={state}
            onSetPublisherWallet={onSetPublisherWallet}
            onRequestVerification={onRequestVerification}
            onApproveVerification={onApproveVerification}
            onRejectVerification={onRejectVerification}
            onSuspendVerification={onSuspendVerification}
            onRevokeVerification={onRevokeVerification}
            onReinstateVerification={onReinstateVerification}
          />

          <ExtensionsPanel
            state={state}
            on={{ setExtensions: onSetExtensions }}
          />
        </div>
      </div>
    </div>
  );
}
