import { DocumentToolbar } from "@powerhousedao/design-system/connect";
import { generateId } from "document-model";
import { useCallback } from "react";
import {
  useSelectedProjectDocument,
  actions,
} from "document-models/project";
import type { ProjectState } from "document-models/project";
import "../load-design-tokens.js";
import { ProjectHeader } from "./components/ProjectHeader.js";
import { ProjectProfile } from "./components/ProjectProfile.js";
import { ProjectAttestations } from "./components/ProjectAttestations.js";
import { ProjectRelevantPools } from "./components/ProjectRelevantPools.js";
import { ProjectIdentity } from "./components/ProjectIdentity.js";
import { ProjectSocials } from "./components/ProjectSocials.js";
import { ProjectExtensions } from "./components/ProjectExtensions.js";

export default function Editor() {
  const [document, dispatch] = useSelectedProjectDocument();

  const setName = useCallback(
    (name: string) => dispatch(actions.setProjectName({ name })),
    [dispatch],
  );
  const setDesc = useCallback(
    (description: string) =>
      dispatch(actions.setProjectDescription({ description })),
    [dispatch],
  );
  const setContent = useCallback(
    (contentURI: string) => dispatch(actions.setContentUri({ contentURI })),
    [dispatch],
  );
  const setEmail = useCallback(
    (email: string) => dispatch(actions.setProjectEmail({ email })),
    [dispatch],
  );
  const setImage = useCallback(
    (image: string) => dispatch(actions.setProjectImage({ image })),
    [dispatch],
  );
  const setCoverImage = useCallback(
    (coverImage: string) =>
      dispatch(actions.setProjectCoverImage({ coverImage })),
    [dispatch],
  );
  const setLicenseUri = useCallback(
    (licenseURI: string) => dispatch(actions.setLicenseUri({ licenseURI })),
    [dispatch],
  );
  const setCode = useCallback(
    (code: string) => dispatch(actions.setProjectCode({ code })),
    [dispatch],
  );
  const setOwnerDid = useCallback(
    (ownerDid: string) => dispatch(actions.setOwnerDid({ ownerDid })),
    [dispatch],
  );
  const setMembersUri = useCallback(
    (membersURI: string) => dispatch(actions.setMembersUri({ membersURI })),
    [dispatch],
  );
  const setAttestationIssuersUri = useCallback(
    (attestationIssuersURI: string) =>
      dispatch(
        actions.setProjectAttestationIssuersUri({ attestationIssuersURI }),
      ),
    [dispatch],
  );
  const addRelevantPool = useCallback(
    (poolId: string, poolName: string) =>
      dispatch(
        actions.addRelevantPool({ id: generateId(), poolId, poolName }),
      ),
    [dispatch],
  );
  const removeRelevantPool = useCallback(
    (id: string) => dispatch(actions.removeRelevantPool({ id })),
    [dispatch],
  );
  const addSameAs = useCallback(
    (url: string) => dispatch(actions.addProjectSameAs({ url })),
    [dispatch],
  );
  const removeSameAs = useCallback(
    (url: string) => dispatch(actions.removeProjectSameAs({ url })),
    [dispatch],
  );
  const addSocial = useCallback(
    (name: string, value: string) =>
      dispatch(actions.addProjectSocial({ id: generateId(), name, value })),
    [dispatch],
  );
  const removeSocial = useCallback(
    (id: string) => dispatch(actions.removeProjectSocial({ id })),
    [dispatch],
  );
  const setExtensions = useCallback(
    (extensions: string) =>
      dispatch(actions.setProjectExtensions({ extensions })),
    [dispatch],
  );

  if (!document) return null;
  const state = document.state.global as ProjectState;

  return (
    <div className="rfp-scope">
      <DocumentToolbar />
      <div className="rfp-page">
        <div className="rfp-page-inner">
          <ProjectHeader state={state} />
          <ProjectProfile
            state={state}
            on={{
              setName,
              setDesc,
              setContent,
              setEmail,
              setImage,
              setCoverImage,
              setLicenseUri,
              setCode,
            }}
          />
          <ProjectAttestations
            state={state}
            on={{ setMembersUri, setAttestationIssuersUri }}
          />
          <ProjectRelevantPools
            state={state}
            on={{ addRelevantPool, removeRelevantPool }}
          />
          <ProjectIdentity
            state={state}
            on={{ setOwnerDid, addSameAs, removeSameAs }}
          />
          <ProjectSocials
            state={state}
            on={{ addSocial, removeSocial }}
          />
          <ProjectExtensions
            state={state}
            on={{ setExtensions }}
          />
        </div>
      </div>
    </div>
  );
}
