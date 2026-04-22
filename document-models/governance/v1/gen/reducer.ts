/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { Reducer, StateReducer } from "document-model";
import { isDocumentAction, createReducer } from "document-model";
import type { GovernancePHState } from "document-models/governance/v1";

import { governanceDisputesOperations } from "../src/reducers/disputes.js";
import { governancePublisherDecisionsOperations } from "../src/reducers/publisher-decisions.js";
import { governanceRfcsOperations } from "../src/reducers/rfcs.js";
import { governancePoliciesOperations } from "../src/reducers/policies.js";

import {
  FileDisputeInputSchema,
  AssignInvestigatorInputSchema,
  ResolveDisputeInputSchema,
  DismissDisputeInputSchema,
  AppealDisputeInputSchema,
  RecordPublisherDecisionInputSchema,
  ProposeRfcInputSchema,
  StartRfcReviewInputSchema,
  RatifyRfcInputSchema,
  ImplementRfcInputSchema,
  RejectRfcInputSchema,
  WithdrawRfcInputSchema,
  PublishPolicyInputSchema,
  SupersedePolicyInputSchema,
} from "./schema/zod.js";

const stateReducer: StateReducer<GovernancePHState> = (
  state,
  action,
  dispatch,
) => {
  if (isDocumentAction(action)) {
    return state;
  }
  switch (action.type) {
    case "FILE_DISPUTE": {
      FileDisputeInputSchema().parse(action.input);

      governanceDisputesOperations.fileDisputeOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "ASSIGN_INVESTIGATOR": {
      AssignInvestigatorInputSchema().parse(action.input);

      governanceDisputesOperations.assignInvestigatorOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "RESOLVE_DISPUTE": {
      ResolveDisputeInputSchema().parse(action.input);

      governanceDisputesOperations.resolveDisputeOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "DISMISS_DISPUTE": {
      DismissDisputeInputSchema().parse(action.input);

      governanceDisputesOperations.dismissDisputeOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "APPEAL_DISPUTE": {
      AppealDisputeInputSchema().parse(action.input);

      governanceDisputesOperations.appealDisputeOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "RECORD_PUBLISHER_DECISION": {
      RecordPublisherDecisionInputSchema().parse(action.input);

      governancePublisherDecisionsOperations.recordPublisherDecisionOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "PROPOSE_RFC": {
      ProposeRfcInputSchema().parse(action.input);

      governanceRfcsOperations.proposeRfcOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "START_RFC_REVIEW": {
      StartRfcReviewInputSchema().parse(action.input);

      governanceRfcsOperations.startRfcReviewOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "RATIFY_RFC": {
      RatifyRfcInputSchema().parse(action.input);

      governanceRfcsOperations.ratifyRfcOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "IMPLEMENT_RFC": {
      ImplementRfcInputSchema().parse(action.input);

      governanceRfcsOperations.implementRfcOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REJECT_RFC": {
      RejectRfcInputSchema().parse(action.input);

      governanceRfcsOperations.rejectRfcOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "WITHDRAW_RFC": {
      WithdrawRfcInputSchema().parse(action.input);

      governanceRfcsOperations.withdrawRfcOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "PUBLISH_POLICY": {
      PublishPolicyInputSchema().parse(action.input);

      governancePoliciesOperations.publishPolicyOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SUPERSEDE_POLICY": {
      SupersedePolicyInputSchema().parse(action.input);

      governancePoliciesOperations.supersedePolicyOperation(
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

export const reducer: Reducer<GovernancePHState> = createReducer(stateReducer);
