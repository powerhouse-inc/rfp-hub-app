import { baseActions } from "document-model";
import {
  grantSystemIdentityActions,
  grantSystemLinksActions,
  grantSystemVerificationActions,
} from "./gen/creators.js";

/** Actions for the GrantSystem document model */

export const actions = {
  ...baseActions,
  ...grantSystemIdentityActions,
  ...grantSystemLinksActions,
  ...grantSystemVerificationActions,
};
