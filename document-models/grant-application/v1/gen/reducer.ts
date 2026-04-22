/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { Reducer, StateReducer } from "document-model";
import { isDocumentAction, createReducer } from "document-model";
import type { GrantApplicationPHState } from "document-models/grant-application/v1";

import { grantApplicationMetadataOperations } from "../src/reducers/metadata.js";
import { grantApplicationFundingOperations } from "../src/reducers/funding.js";
import { grantApplicationReviewOperations } from "../src/reducers/review.js";
import { grantApplicationPayoutsOperations } from "../src/reducers/payouts.js";

import {
  SetPoolRefInputSchema,
  SetProjectRefInputSchema,
  SetCreatedAtInputSchema,
  SetAppContentUriInputSchema,
  SetDiscussionsToInputSchema,
  SetAppLicenseUriInputSchema,
  SetIsInactiveInputSchema,
  SetCompletionRateInputSchema,
  SetAppExtensionsInputSchema,
  AddAppSocialInputSchema,
  RemoveAppSocialInputSchema,
  AddFundsAskedInputSchema,
  RemoveFundsAskedInputSchema,
  SetFundsAskedUsdInputSchema,
  AddFundsApprovedInputSchema,
  SetFundsApprovedUsdInputSchema,
  SetPayoutAddressInputSchema,
  SetPaymentTermInputSchema,
  SubmitApplicationInputSchema,
  OpenApplicationInputSchema,
  StartReviewInputSchema,
  RequestRevisionInputSchema,
  MarkRevisedInputSchema,
  ApproveApplicationInputSchema,
  ConditionallyApproveInputSchema,
  RejectApplicationInputSchema,
  WithdrawApplicationInputSchema,
  RecordPayoutInputSchema,
  MarkCompletedInputSchema,
} from "./schema/zod.js";

const stateReducer: StateReducer<GrantApplicationPHState> = (
  state,
  action,
  dispatch,
) => {
  if (isDocumentAction(action)) {
    return state;
  }
  switch (action.type) {
    case "SET_POOL_REF": {
      SetPoolRefInputSchema().parse(action.input);

      grantApplicationMetadataOperations.setPoolRefOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_PROJECT_REF": {
      SetProjectRefInputSchema().parse(action.input);

      grantApplicationMetadataOperations.setProjectRefOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_CREATED_AT": {
      SetCreatedAtInputSchema().parse(action.input);

      grantApplicationMetadataOperations.setCreatedAtOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_APP_CONTENT_URI": {
      SetAppContentUriInputSchema().parse(action.input);

      grantApplicationMetadataOperations.setAppContentUriOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_DISCUSSIONS_TO": {
      SetDiscussionsToInputSchema().parse(action.input);

      grantApplicationMetadataOperations.setDiscussionsToOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_APP_LICENSE_URI": {
      SetAppLicenseUriInputSchema().parse(action.input);

      grantApplicationMetadataOperations.setAppLicenseUriOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_IS_INACTIVE": {
      SetIsInactiveInputSchema().parse(action.input);

      grantApplicationMetadataOperations.setIsInactiveOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_COMPLETION_RATE": {
      SetCompletionRateInputSchema().parse(action.input);

      grantApplicationMetadataOperations.setCompletionRateOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_APP_EXTENSIONS": {
      SetAppExtensionsInputSchema().parse(action.input);

      grantApplicationMetadataOperations.setAppExtensionsOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "ADD_APP_SOCIAL": {
      AddAppSocialInputSchema().parse(action.input);

      grantApplicationMetadataOperations.addAppSocialOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REMOVE_APP_SOCIAL": {
      RemoveAppSocialInputSchema().parse(action.input);

      grantApplicationMetadataOperations.removeAppSocialOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "ADD_FUNDS_ASKED": {
      AddFundsAskedInputSchema().parse(action.input);

      grantApplicationFundingOperations.addFundsAskedOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REMOVE_FUNDS_ASKED": {
      RemoveFundsAskedInputSchema().parse(action.input);

      grantApplicationFundingOperations.removeFundsAskedOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_FUNDS_ASKED_USD": {
      SetFundsAskedUsdInputSchema().parse(action.input);

      grantApplicationFundingOperations.setFundsAskedUsdOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "ADD_FUNDS_APPROVED": {
      AddFundsApprovedInputSchema().parse(action.input);

      grantApplicationFundingOperations.addFundsApprovedOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_FUNDS_APPROVED_USD": {
      SetFundsApprovedUsdInputSchema().parse(action.input);

      grantApplicationFundingOperations.setFundsApprovedUsdOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_PAYOUT_ADDRESS": {
      SetPayoutAddressInputSchema().parse(action.input);

      grantApplicationFundingOperations.setPayoutAddressOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_PAYMENT_TERM": {
      SetPaymentTermInputSchema().parse(action.input);

      grantApplicationFundingOperations.setPaymentTermOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SUBMIT_APPLICATION": {
      SubmitApplicationInputSchema().parse(action.input);

      grantApplicationReviewOperations.submitApplicationOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "OPEN_APPLICATION": {
      OpenApplicationInputSchema().parse(action.input);

      grantApplicationReviewOperations.openApplicationOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "START_REVIEW": {
      StartReviewInputSchema().parse(action.input);

      grantApplicationReviewOperations.startReviewOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REQUEST_REVISION": {
      RequestRevisionInputSchema().parse(action.input);

      grantApplicationReviewOperations.requestRevisionOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "MARK_REVISED": {
      MarkRevisedInputSchema().parse(action.input);

      grantApplicationReviewOperations.markRevisedOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "APPROVE_APPLICATION": {
      ApproveApplicationInputSchema().parse(action.input);

      grantApplicationReviewOperations.approveApplicationOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "CONDITIONALLY_APPROVE": {
      ConditionallyApproveInputSchema().parse(action.input);

      grantApplicationReviewOperations.conditionallyApproveOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REJECT_APPLICATION": {
      RejectApplicationInputSchema().parse(action.input);

      grantApplicationReviewOperations.rejectApplicationOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "WITHDRAW_APPLICATION": {
      WithdrawApplicationInputSchema().parse(action.input);

      grantApplicationReviewOperations.withdrawApplicationOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "RECORD_PAYOUT": {
      RecordPayoutInputSchema().parse(action.input);

      grantApplicationPayoutsOperations.recordPayoutOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "MARK_COMPLETED": {
      MarkCompletedInputSchema().parse(action.input);

      grantApplicationPayoutsOperations.markCompletedOperation(
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

export const reducer: Reducer<GrantApplicationPHState> =
  createReducer(stateReducer);
