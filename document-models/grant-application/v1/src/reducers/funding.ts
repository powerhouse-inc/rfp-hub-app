import { FundsAskedNotFoundError } from "../../gen/funding/error.js";
import type { GrantApplicationFundingOperations } from "document-models/grant-application/v1";

export const grantApplicationFundingOperations: GrantApplicationFundingOperations =
  {
    addFundsAskedOperation(state, action) {
      state.fundsAsked.push({
        id: action.input.id,
        amount: action.input.amount,
      });
    },
    removeFundsAskedOperation(state, action) {
      const idx = state.fundsAsked.findIndex((f) => f.id === action.input.id);
      if (idx === -1)
        throw new FundsAskedNotFoundError(
          `Funds-asked entry ${action.input.id} not found`,
        );
      state.fundsAsked.splice(idx, 1);
    },
    setFundsAskedUsdOperation(state, action) {
      state.fundsAskedInUSD = action.input.fundsAskedInUSD || null;
    },
    addFundsApprovedOperation(state, action) {
      state.fundsApproved.push({
        id: action.input.id,
        amount: action.input.amount,
      });
    },
    setFundsApprovedUsdOperation(state, action) {
      state.fundsApprovedInUSD = action.input.fundsApprovedInUSD || null;
    },
    setPayoutAddressOperation(state, action) {
      state.payoutAddress = {
        addressType: action.input.addressType,
        value: action.input.value,
      };
    },
    setPaymentTermOperation(state, action) {
      state.paymentTerm = action.input.paymentTerm;
    },
  };
