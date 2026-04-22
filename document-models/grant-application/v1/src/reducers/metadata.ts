import { AppSocialNotFoundError } from "../../gen/metadata/error.js";
import type { GrantApplicationMetadataOperations } from "document-models/grant-application/v1";

export const grantApplicationMetadataOperations: GrantApplicationMetadataOperations =
  {
    setPoolRefOperation(state, action) {
      state.grantPoolsURI = action.input.grantPoolsURI;
      state.grantPoolId = action.input.grantPoolId;
      state.grantPoolName = action.input.grantPoolName;
    },
    setProjectRefOperation(state, action) {
      state.projectsURI = action.input.projectsURI;
      state.projectId = action.input.projectId;
      state.projectName = action.input.projectName;
    },
    setCreatedAtOperation(state, action) {
      state.createdAt = action.input.createdAt;
    },
    setAppContentUriOperation(state, action) {
      state.contentURI = action.input.contentURI || null;
    },
    setDiscussionsToOperation(state, action) {
      state.discussionsTo = action.input.discussionsTo || null;
    },
    setAppLicenseUriOperation(state, action) {
      state.licenseURI = action.input.licenseURI || null;
    },
    setIsInactiveOperation(state, action) {
      state.isInactive = action.input.isInactive;
    },
    setCompletionRateOperation(state, action) {
      state.applicationCompletionRate =
        action.input.applicationCompletionRate || null;
    },
    setAppExtensionsOperation(state, action) {
      state.extensions = action.input.extensions || null;
    },
    addAppSocialOperation(state, action) {
      state.socials.push({
        id: action.input.id,
        platform: action.input.platform,
        url: action.input.url,
      });
    },
    removeAppSocialOperation(state, action) {
      const idx = state.socials.findIndex((s) => s.id === action.input.id);
      if (idx === -1)
        throw new AppSocialNotFoundError(`Social ${action.input.id} not found`);
      state.socials.splice(idx, 1);
    },
  };
