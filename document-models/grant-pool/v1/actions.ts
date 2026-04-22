import { baseActions } from "document-model";
import {
  grantPoolMetadataActions,
  grantPoolFundingActions,
  grantPoolScheduleActions,
  grantPoolClassificationActions,
  grantPoolResourcesActions,
  grantPoolReviewersActions,
  grantPoolGovernanceActions,
  grantPoolLineageActions,
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
