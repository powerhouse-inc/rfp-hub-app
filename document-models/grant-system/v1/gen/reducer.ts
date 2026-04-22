/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { Reducer, StateReducer } from "document-model";
import { isDocumentAction, createReducer } from "document-model";
import type { GrantSystemPHState } from "document-models/grant-system/v1";

import { grantSystemIdentityOperations } from "../src/reducers/identity.js";
import { grantSystemLinksOperations } from "../src/reducers/links.js";
import { grantSystemVerificationOperations } from "../src/reducers/verification.js";

import {
  SetTypeInputSchema,
  SetCodeInputSchema,
  SetDescriptionInputSchema,
  SetGrantPoolsUriInputSchema,
  SetExtensionsInputSchema,
  SetImageInputSchema,
  SetCoverImageInputSchema,
  SetEmailInputSchema,
  SetContactNameInputSchema,
  SetOrgNameInputSchema,
  AddSameAsInputSchema,
  RemoveSameAsInputSchema,
  AddSocialInputSchema,
  RemoveSocialInputSchema,
  UpdateSocialUrlInputSchema,
  SetPublisherWalletInputSchema,
  RequestVerificationInputSchema,
  ApproveVerificationInputSchema,
  RejectVerificationInputSchema,
  SuspendVerificationInputSchema,
  RevokeVerificationInputSchema,
  ReinstateVerificationInputSchema,
} from "./schema/zod.js";

const stateReducer: StateReducer<GrantSystemPHState> = (
  state,
  action,
  dispatch,
) => {
  if (isDocumentAction(action)) {
    return state;
  }
  switch (action.type) {
    case "SET_TYPE": {
      SetTypeInputSchema().parse(action.input);

      grantSystemIdentityOperations.setTypeOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_CODE": {
      SetCodeInputSchema().parse(action.input);

      grantSystemIdentityOperations.setCodeOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_DESCRIPTION": {
      SetDescriptionInputSchema().parse(action.input);

      grantSystemIdentityOperations.setDescriptionOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_GRANT_POOLS_URI": {
      SetGrantPoolsUriInputSchema().parse(action.input);

      grantSystemIdentityOperations.setGrantPoolsUriOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_EXTENSIONS": {
      SetExtensionsInputSchema().parse(action.input);

      grantSystemIdentityOperations.setExtensionsOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_IMAGE": {
      SetImageInputSchema().parse(action.input);

      grantSystemIdentityOperations.setImageOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_COVER_IMAGE": {
      SetCoverImageInputSchema().parse(action.input);

      grantSystemIdentityOperations.setCoverImageOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_EMAIL": {
      SetEmailInputSchema().parse(action.input);

      grantSystemIdentityOperations.setEmailOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_CONTACT_NAME": {
      SetContactNameInputSchema().parse(action.input);

      grantSystemIdentityOperations.setContactNameOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_ORG_NAME": {
      SetOrgNameInputSchema().parse(action.input);

      grantSystemIdentityOperations.setOrgNameOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "ADD_SAME_AS": {
      AddSameAsInputSchema().parse(action.input);

      grantSystemLinksOperations.addSameAsOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REMOVE_SAME_AS": {
      RemoveSameAsInputSchema().parse(action.input);

      grantSystemLinksOperations.removeSameAsOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "ADD_SOCIAL": {
      AddSocialInputSchema().parse(action.input);

      grantSystemLinksOperations.addSocialOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REMOVE_SOCIAL": {
      RemoveSocialInputSchema().parse(action.input);

      grantSystemLinksOperations.removeSocialOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "UPDATE_SOCIAL_URL": {
      UpdateSocialUrlInputSchema().parse(action.input);

      grantSystemLinksOperations.updateSocialUrlOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_PUBLISHER_WALLET": {
      SetPublisherWalletInputSchema().parse(action.input);

      grantSystemVerificationOperations.setPublisherWalletOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REQUEST_VERIFICATION": {
      RequestVerificationInputSchema().parse(action.input);

      grantSystemVerificationOperations.requestVerificationOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "APPROVE_VERIFICATION": {
      ApproveVerificationInputSchema().parse(action.input);

      grantSystemVerificationOperations.approveVerificationOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REJECT_VERIFICATION": {
      RejectVerificationInputSchema().parse(action.input);

      grantSystemVerificationOperations.rejectVerificationOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SUSPEND_VERIFICATION": {
      SuspendVerificationInputSchema().parse(action.input);

      grantSystemVerificationOperations.suspendVerificationOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REVOKE_VERIFICATION": {
      RevokeVerificationInputSchema().parse(action.input);

      grantSystemVerificationOperations.revokeVerificationOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REINSTATE_VERIFICATION": {
      ReinstateVerificationInputSchema().parse(action.input);

      grantSystemVerificationOperations.reinstateVerificationOperation(
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

export const reducer: Reducer<GrantSystemPHState> = createReducer(stateReducer);
