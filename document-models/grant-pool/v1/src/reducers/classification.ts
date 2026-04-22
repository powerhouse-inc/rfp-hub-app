import type { GrantPoolClassificationOperations } from "document-models/grant-pool/v1";
import {
  DuplicateCategoryError,
  CategoryNotFoundError,
  DuplicateEcosystemError,
  EcosystemNotFoundError,
  DuplicateTagError,
  TagNotFoundError,
} from "../../gen/classification/error.js";

export const grantPoolClassificationOperations: GrantPoolClassificationOperations =
  {
    addCategoryOperation(state, action) {
      if (state.categories.includes(action.input.category)) {
        throw new DuplicateCategoryError(
          `Category ${action.input.category} already present`,
        );
      }
      state.categories.push(action.input.category);
    },
    removeCategoryOperation(state, action) {
      const idx = state.categories.indexOf(action.input.category);
      if (idx === -1) {
        throw new CategoryNotFoundError(
          `Category ${action.input.category} not found`,
        );
      }
      state.categories.splice(idx, 1);
    },
    addEcosystemOperation(state, action) {
      if (state.ecosystems.includes(action.input.ecosystem)) {
        throw new DuplicateEcosystemError(
          `Ecosystem ${action.input.ecosystem} already present`,
        );
      }
      state.ecosystems.push(action.input.ecosystem);
    },
    removeEcosystemOperation(state, action) {
      const idx = state.ecosystems.indexOf(action.input.ecosystem);
      if (idx === -1) {
        throw new EcosystemNotFoundError(
          `Ecosystem ${action.input.ecosystem} not found`,
        );
      }
      state.ecosystems.splice(idx, 1);
    },
    addTagOperation(state, action) {
      if (state.tags.includes(action.input.tag)) {
        throw new DuplicateTagError(`Tag ${action.input.tag} already present`);
      }
      state.tags.push(action.input.tag);
    },
    removeTagOperation(state, action) {
      const idx = state.tags.indexOf(action.input.tag);
      if (idx === -1) {
        throw new TagNotFoundError(`Tag ${action.input.tag} not found`);
      }
      state.tags.splice(idx, 1);
    },
  };
