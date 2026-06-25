/**
 * WARNING: DO NOT EDIT
 * This file is auto-generated and updated by codegen
 */
import { baseActions } from "document-model";
import {
  governanceDisputesActions,
  governancePoliciesActions,
  governancePublisherDecisionsActions,
  governanceRfcsActions,
} from "./gen/creators.js";

/** Actions for the Governance document model */

export const actions = {
  ...baseActions,
  ...governanceDisputesActions,
  ...governancePublisherDecisionsActions,
  ...governanceRfcsActions,
  ...governancePoliciesActions,
};
