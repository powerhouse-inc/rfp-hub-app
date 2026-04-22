/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { Reducer, StateReducer } from "document-model";
import { isDocumentAction, createReducer } from "document-model";
import type { ProjectPHState } from "document-models/project/v1";

import { projectProfileOperations } from "../src/reducers/profile.js";
import { projectAttestationsOperations } from "../src/reducers/attestations.js";
import { projectRelevanceOperations } from "../src/reducers/relevance.js";
import { projectLinksOperations } from "../src/reducers/links.js";

import {
  SetProjectNameInputSchema,
  SetProjectDescriptionInputSchema,
  SetContentUriInputSchema,
  SetProjectEmailInputSchema,
  SetMembersUriInputSchema,
  SetProjectImageInputSchema,
  SetProjectCoverImageInputSchema,
  SetLicenseUriInputSchema,
  SetProjectCodeInputSchema,
  SetOwnerDidInputSchema,
  SetProjectExtensionsInputSchema,
  SetProjectAttestationIssuersUriInputSchema,
  AddRelevantPoolInputSchema,
  RemoveRelevantPoolInputSchema,
  AddProjectSocialInputSchema,
  RemoveProjectSocialInputSchema,
  UpdateProjectSocialUrlInputSchema,
  AddProjectSameAsInputSchema,
  RemoveProjectSameAsInputSchema,
} from "./schema/zod.js";

const stateReducer: StateReducer<ProjectPHState> = (
  state,
  action,
  dispatch,
) => {
  if (isDocumentAction(action)) {
    return state;
  }
  switch (action.type) {
    case "SET_PROJECT_NAME": {
      SetProjectNameInputSchema().parse(action.input);

      projectProfileOperations.setProjectNameOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_PROJECT_DESCRIPTION": {
      SetProjectDescriptionInputSchema().parse(action.input);

      projectProfileOperations.setProjectDescriptionOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_CONTENT_URI": {
      SetContentUriInputSchema().parse(action.input);

      projectProfileOperations.setContentUriOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_PROJECT_EMAIL": {
      SetProjectEmailInputSchema().parse(action.input);

      projectProfileOperations.setProjectEmailOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_MEMBERS_URI": {
      SetMembersUriInputSchema().parse(action.input);

      projectProfileOperations.setMembersUriOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_PROJECT_IMAGE": {
      SetProjectImageInputSchema().parse(action.input);

      projectProfileOperations.setProjectImageOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_PROJECT_COVER_IMAGE": {
      SetProjectCoverImageInputSchema().parse(action.input);

      projectProfileOperations.setProjectCoverImageOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_LICENSE_URI": {
      SetLicenseUriInputSchema().parse(action.input);

      projectProfileOperations.setLicenseUriOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_PROJECT_CODE": {
      SetProjectCodeInputSchema().parse(action.input);

      projectProfileOperations.setProjectCodeOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_OWNER_DID": {
      SetOwnerDidInputSchema().parse(action.input);

      projectProfileOperations.setOwnerDidOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_PROJECT_EXTENSIONS": {
      SetProjectExtensionsInputSchema().parse(action.input);

      projectProfileOperations.setProjectExtensionsOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_PROJECT_ATTESTATION_ISSUERS_URI": {
      SetProjectAttestationIssuersUriInputSchema().parse(action.input);

      projectAttestationsOperations.setProjectAttestationIssuersUriOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "ADD_RELEVANT_POOL": {
      AddRelevantPoolInputSchema().parse(action.input);

      projectRelevanceOperations.addRelevantPoolOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REMOVE_RELEVANT_POOL": {
      RemoveRelevantPoolInputSchema().parse(action.input);

      projectRelevanceOperations.removeRelevantPoolOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "ADD_PROJECT_SOCIAL": {
      AddProjectSocialInputSchema().parse(action.input);

      projectLinksOperations.addProjectSocialOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REMOVE_PROJECT_SOCIAL": {
      RemoveProjectSocialInputSchema().parse(action.input);

      projectLinksOperations.removeProjectSocialOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "UPDATE_PROJECT_SOCIAL_URL": {
      UpdateProjectSocialUrlInputSchema().parse(action.input);

      projectLinksOperations.updateProjectSocialUrlOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "ADD_PROJECT_SAME_AS": {
      AddProjectSameAsInputSchema().parse(action.input);

      projectLinksOperations.addProjectSameAsOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REMOVE_PROJECT_SAME_AS": {
      RemoveProjectSameAsInputSchema().parse(action.input);

      projectLinksOperations.removeProjectSameAsOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    default:
      return state;
  }
};

export const reducer: Reducer<ProjectPHState> = createReducer(stateReducer);
