import {
  SameAsAlreadyExistsError,
  SameAsNotFoundError,
  SocialNotFoundError,
} from "../../gen/links/error.js";
import type { GrantSystemLinksOperations } from "document-models/grant-system/v1";

export const grantSystemLinksOperations: GrantSystemLinksOperations = {
  addSameAsOperation(state, action) {
    if (state.sameAs.includes(action.input.url)) {
      throw new SameAsAlreadyExistsError(
        `URL ${action.input.url} already in sameAs list`,
      );
    }
    state.sameAs.push(action.input.url);
  },
  removeSameAsOperation(state, action) {
    const idx = state.sameAs.indexOf(action.input.url);
    if (idx === -1) {
      throw new SameAsNotFoundError(
        `URL ${action.input.url} not in sameAs list`,
      );
    }
    state.sameAs.splice(idx, 1);
  },
  addSocialOperation(state, action) {
    state.socials.push({
      id: action.input.id,
      platform: action.input.platform,
      url: action.input.url,
    });
  },
  removeSocialOperation(state, action) {
    const idx = state.socials.findIndex((s) => s.id === action.input.id);
    if (idx === -1) {
      throw new SocialNotFoundError(
        `Social with id ${action.input.id} not found`,
      );
    }
    state.socials.splice(idx, 1);
  },
  updateSocialUrlOperation(state, action) {
    const social = state.socials.find((s) => s.id === action.input.id);
    if (!social) {
      throw new SocialNotFoundError(
        `Social with id ${action.input.id} not found`,
      );
    }
    social.url = action.input.url;
  },
};
