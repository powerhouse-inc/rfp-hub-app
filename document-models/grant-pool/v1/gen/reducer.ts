/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { Reducer, StateReducer } from "document-model";
import { isDocumentAction, createReducer } from "document-model";
import type { GrantPoolPHState } from "document-models/grant-pool/v1";

import { grantPoolMetadataOperations } from "../src/reducers/metadata.js";
import { grantPoolFundingOperations } from "../src/reducers/funding.js";
import { grantPoolScheduleOperations } from "../src/reducers/schedule.js";
import { grantPoolClassificationOperations } from "../src/reducers/classification.js";
import { grantPoolResourcesOperations } from "../src/reducers/resources.js";
import { grantPoolReviewersOperations } from "../src/reducers/reviewers.js";
import { grantPoolGovernanceOperations } from "../src/reducers/governance.js";
import { grantPoolLineageOperations } from "../src/reducers/lineage.js";

import {
  SetPoolNameInputSchema,
  SetDescriptionInputSchema,
  SetCodeInputSchema,
  SetGrantSystemRefInputSchema,
  SetBriefingUriInputSchema,
  SetEligibilityCriteriaInputSchema,
  SetEvaluationCriteriaInputSchema,
  SetPoolEmailInputSchema,
  SetPoolImageInputSchema,
  SetPoolCoverImageInputSchema,
  SetPoolExtensionsInputSchema,
  SetFundingMechanismInputSchema,
  AddPoolSizeEntryInputSchema,
  RemovePoolSizeEntryInputSchema,
  SetTotalPoolSizeUsdInputSchema,
  SetGrantBoundsInputSchema,
  SetOpenDateInputSchema,
  SetCloseDateInputSchema,
  SetIsOpenInputSchema,
  AdvanceLifecycleInputSchema,
  AddCategoryInputSchema,
  RemoveCategoryInputSchema,
  AddEcosystemInputSchema,
  RemoveEcosystemInputSchema,
  AddTagInputSchema,
  RemoveTagInputSchema,
  SetGovernanceUriInputSchema,
  SetApplicationsUriInputSchema,
  SetAttestationIssuersUriInputSchema,
  AddRequiredCredentialInputSchema,
  RemoveRequiredCredentialInputSchema,
  AddContextDocumentInputSchema,
  RemoveContextDocumentInputSchema,
  AddPoolSameAsInputSchema,
  RemovePoolSameAsInputSchema,
  AddReviewerInputSchema,
  RemoveReviewerInputSchema,
  SetSubmitterInputSchema,
  SetPublisherInputSchema,
  RecordVerificationInputSchema,
  PublishPoolInputSchema,
  ClosePoolInputSchema,
  CancelPoolInputSchema,
  SetGovernanceStateInputSchema,
  MarkSupersedesInputSchema,
  MarkClaimedFromEntryInputSchema,
  MarkDuplicateOfInputSchema,
} from "./schema/zod.js";

const stateReducer: StateReducer<GrantPoolPHState> = (
  state,
  action,
  dispatch,
) => {
  if (isDocumentAction(action)) {
    return state;
  }
  switch (action.type) {
    case "SET_POOL_NAME": {
      SetPoolNameInputSchema().parse(action.input);

      grantPoolMetadataOperations.setPoolNameOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_DESCRIPTION": {
      SetDescriptionInputSchema().parse(action.input);

      grantPoolMetadataOperations.setDescriptionOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_CODE": {
      SetCodeInputSchema().parse(action.input);

      grantPoolMetadataOperations.setCodeOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_GRANT_SYSTEM_REF": {
      SetGrantSystemRefInputSchema().parse(action.input);

      grantPoolMetadataOperations.setGrantSystemRefOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_BRIEFING_URI": {
      SetBriefingUriInputSchema().parse(action.input);

      grantPoolMetadataOperations.setBriefingUriOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_ELIGIBILITY_CRITERIA": {
      SetEligibilityCriteriaInputSchema().parse(action.input);

      grantPoolMetadataOperations.setEligibilityCriteriaOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_EVALUATION_CRITERIA": {
      SetEvaluationCriteriaInputSchema().parse(action.input);

      grantPoolMetadataOperations.setEvaluationCriteriaOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_POOL_EMAIL": {
      SetPoolEmailInputSchema().parse(action.input);

      grantPoolMetadataOperations.setPoolEmailOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_POOL_IMAGE": {
      SetPoolImageInputSchema().parse(action.input);

      grantPoolMetadataOperations.setPoolImageOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_POOL_COVER_IMAGE": {
      SetPoolCoverImageInputSchema().parse(action.input);

      grantPoolMetadataOperations.setPoolCoverImageOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_POOL_EXTENSIONS": {
      SetPoolExtensionsInputSchema().parse(action.input);

      grantPoolMetadataOperations.setPoolExtensionsOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_FUNDING_MECHANISM": {
      SetFundingMechanismInputSchema().parse(action.input);

      grantPoolFundingOperations.setFundingMechanismOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "ADD_POOL_SIZE_ENTRY": {
      AddPoolSizeEntryInputSchema().parse(action.input);

      grantPoolFundingOperations.addPoolSizeEntryOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REMOVE_POOL_SIZE_ENTRY": {
      RemovePoolSizeEntryInputSchema().parse(action.input);

      grantPoolFundingOperations.removePoolSizeEntryOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_TOTAL_POOL_SIZE_USD": {
      SetTotalPoolSizeUsdInputSchema().parse(action.input);

      grantPoolFundingOperations.setTotalPoolSizeUsdOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_GRANT_BOUNDS": {
      SetGrantBoundsInputSchema().parse(action.input);

      grantPoolFundingOperations.setGrantBoundsOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_OPEN_DATE": {
      SetOpenDateInputSchema().parse(action.input);

      grantPoolScheduleOperations.setOpenDateOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_CLOSE_DATE": {
      SetCloseDateInputSchema().parse(action.input);

      grantPoolScheduleOperations.setCloseDateOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_IS_OPEN": {
      SetIsOpenInputSchema().parse(action.input);

      grantPoolScheduleOperations.setIsOpenOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "ADVANCE_LIFECYCLE": {
      AdvanceLifecycleInputSchema().parse(action.input);

      grantPoolScheduleOperations.advanceLifecycleOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "ADD_CATEGORY": {
      AddCategoryInputSchema().parse(action.input);

      grantPoolClassificationOperations.addCategoryOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REMOVE_CATEGORY": {
      RemoveCategoryInputSchema().parse(action.input);

      grantPoolClassificationOperations.removeCategoryOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "ADD_ECOSYSTEM": {
      AddEcosystemInputSchema().parse(action.input);

      grantPoolClassificationOperations.addEcosystemOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REMOVE_ECOSYSTEM": {
      RemoveEcosystemInputSchema().parse(action.input);

      grantPoolClassificationOperations.removeEcosystemOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "ADD_TAG": {
      AddTagInputSchema().parse(action.input);

      grantPoolClassificationOperations.addTagOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REMOVE_TAG": {
      RemoveTagInputSchema().parse(action.input);

      grantPoolClassificationOperations.removeTagOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_GOVERNANCE_URI": {
      SetGovernanceUriInputSchema().parse(action.input);

      grantPoolResourcesOperations.setGovernanceUriOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_APPLICATIONS_URI": {
      SetApplicationsUriInputSchema().parse(action.input);

      grantPoolResourcesOperations.setApplicationsUriOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_ATTESTATION_ISSUERS_URI": {
      SetAttestationIssuersUriInputSchema().parse(action.input);

      grantPoolResourcesOperations.setAttestationIssuersUriOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "ADD_REQUIRED_CREDENTIAL": {
      AddRequiredCredentialInputSchema().parse(action.input);

      grantPoolResourcesOperations.addRequiredCredentialOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REMOVE_REQUIRED_CREDENTIAL": {
      RemoveRequiredCredentialInputSchema().parse(action.input);

      grantPoolResourcesOperations.removeRequiredCredentialOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "ADD_CONTEXT_DOCUMENT": {
      AddContextDocumentInputSchema().parse(action.input);

      grantPoolResourcesOperations.addContextDocumentOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REMOVE_CONTEXT_DOCUMENT": {
      RemoveContextDocumentInputSchema().parse(action.input);

      grantPoolResourcesOperations.removeContextDocumentOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "ADD_POOL_SAME_AS": {
      AddPoolSameAsInputSchema().parse(action.input);

      grantPoolResourcesOperations.addPoolSameAsOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REMOVE_POOL_SAME_AS": {
      RemovePoolSameAsInputSchema().parse(action.input);

      grantPoolResourcesOperations.removePoolSameAsOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "ADD_REVIEWER": {
      AddReviewerInputSchema().parse(action.input);

      grantPoolReviewersOperations.addReviewerOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REMOVE_REVIEWER": {
      RemoveReviewerInputSchema().parse(action.input);

      grantPoolReviewersOperations.removeReviewerOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_SUBMITTER": {
      SetSubmitterInputSchema().parse(action.input);

      grantPoolGovernanceOperations.setSubmitterOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_PUBLISHER": {
      SetPublisherInputSchema().parse(action.input);

      grantPoolGovernanceOperations.setPublisherOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "RECORD_VERIFICATION": {
      RecordVerificationInputSchema().parse(action.input);

      grantPoolGovernanceOperations.recordVerificationOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "PUBLISH_POOL": {
      PublishPoolInputSchema().parse(action.input);

      grantPoolGovernanceOperations.publishPoolOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "CLOSE_POOL": {
      ClosePoolInputSchema().parse(action.input);

      grantPoolGovernanceOperations.closePoolOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "CANCEL_POOL": {
      CancelPoolInputSchema().parse(action.input);

      grantPoolGovernanceOperations.cancelPoolOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "SET_GOVERNANCE_STATE": {
      SetGovernanceStateInputSchema().parse(action.input);

      grantPoolGovernanceOperations.setGovernanceStateOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "MARK_SUPERSEDES": {
      MarkSupersedesInputSchema().parse(action.input);

      grantPoolLineageOperations.markSupersedesOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "MARK_CLAIMED_FROM_ENTRY": {
      MarkClaimedFromEntryInputSchema().parse(action.input);

      grantPoolLineageOperations.markClaimedFromEntryOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "MARK_DUPLICATE_OF": {
      MarkDuplicateOfInputSchema().parse(action.input);

      grantPoolLineageOperations.markDuplicateOfOperation(
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

export const reducer: Reducer<GrantPoolPHState> = createReducer(stateReducer);
