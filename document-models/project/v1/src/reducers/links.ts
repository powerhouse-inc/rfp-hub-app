import {
  ProjectSocialNotFoundError,
  SameAsAlreadyExistsError,
  SameAsNotFoundError,
} from "../../gen/links/error.js";
import type { ProjectLinksOperations } from "document-models/project/v1";

export const projectLinksOperations: ProjectLinksOperations = {
  addProjectSocialOperation(state, action) {
    state.socials.push({
      id: action.input.id,
      name: action.input.name,
      value: action.input.value,
    });
  },
  removeProjectSocialOperation(state, action) {
    const idx = state.socials.findIndex((s) => s.id === action.input.id);
    if (idx === -1) {
      throw new ProjectSocialNotFoundError(
        `Social ${action.input.id} not found`,
      );
    }
    state.socials.splice(idx, 1);
  },
  updateProjectSocialUrlOperation(state, action) {
    const s = state.socials.find((x) => x.id === action.input.id);
    if (!s) {
      throw new ProjectSocialNotFoundError(
        `Social ${action.input.id} not found`,
      );
    }
    s.value = action.input.value;
  },
  addProjectSameAsOperation(state, action) {
    if (state.sameAs.includes(action.input.url)) {
      throw new SameAsAlreadyExistsError(`URL already present`);
    }
    state.sameAs.push(action.input.url);
  },
  removeProjectSameAsOperation(state, action) {
    const idx = state.sameAs.indexOf(action.input.url);
    if (idx === -1) {
      throw new SameAsNotFoundError(`URL not found`);
    }
    state.sameAs.splice(idx, 1);
  },
};
