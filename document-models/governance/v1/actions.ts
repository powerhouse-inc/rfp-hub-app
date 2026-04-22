import { baseActions } from "document-model";
import {
  governanceDisputesActions,
  governancePublisherDecisionsActions,
  governanceRfcsActions,
  governancePoliciesActions,
} from "./gen/creators.js";

/** Actions for the Governance document model */

export const actions = {
  ...baseActions,
  ...governanceDisputesActions,
  ...governancePublisherDecisionsActions,
  ...governanceRfcsActions,
  ...governancePoliciesActions,
};
