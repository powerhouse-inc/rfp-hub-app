/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { baseActions } from "document-model";
import {
  grantApplicationFundingActions,
  grantApplicationMetadataActions,
  grantApplicationPayoutsActions,
  grantApplicationReviewActions,
} from "./gen/creators.js";

/** Actions for the GrantApplication document model */

export const actions = {
  ...baseActions,
  ...grantApplicationMetadataActions,
  ...grantApplicationFundingActions,
  ...grantApplicationReviewActions,
  ...grantApplicationPayoutsActions,
};
