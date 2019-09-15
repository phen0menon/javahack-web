import { createReducer } from "#/engine/util";
import ActionTypes from "../actions";

const initialState = {
  data: [],
};

export default createReducer(
  {
    [ActionTypes.TRANSACTION_ACTION_TYPES.GET_TRANSACTIONS_SUCCEED]: (state, action) => ({
      ...state,
      data: action.payload,
    }),

    [ActionTypes.TRANSACTION_ACTION_TYPES.CREATE_TRANSACTIONS_SUCCEED]: (state, action) => {
      const { safeTransfer } = action.payload;
      return {
        ...state,
        data: { ...state.data, safeTransfer },
      };
    },
  },
  initialState,
);
