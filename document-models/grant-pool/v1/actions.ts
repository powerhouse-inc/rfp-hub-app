/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { baseActions } from "document-model";
import {
  grantPoolClassificationActions,
  grantPoolFundingActions,
  grantPoolGovernanceActions,
  grantPoolLineageActions,
  grantPoolMetadataActions,
  grantPoolResourcesActions,
  grantPoolReviewersActions,
  grantPoolScheduleActions,
} from "./gen/creators.js";

/** Actions for the GrantPool document model */

export const actions = {
  ...baseActions,
  ...grantPoolMetadataActions,
  ...grantPoolFundingActions,
  ...grantPoolScheduleActions,
  ...grantPoolClassificationActions,
  ...grantPoolResourcesActions,
  ...grantPoolReviewersActions,
  ...grantPoolGovernanceActions,
  ...grantPoolLineageActions,
};
