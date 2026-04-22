import { baseActions } from "document-model";
import {
  grantApplicationMetadataActions,
  grantApplicationFundingActions,
  grantApplicationReviewActions,
  grantApplicationPayoutsActions,
} from "./gen/creators.js";

/** Actions for the GrantApplication document model */

export const actions = {
  ...baseActions,
  ...grantApplicationMetadataActions,
  ...grantApplicationFundingActions,
  ...grantApplicationReviewActions,
  ...grantApplicationPayoutsActions,
};
