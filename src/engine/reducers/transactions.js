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

    [ActionTypes.TRANSACTION_ACTION_TYPES.TRANSACTION_ADD_SUCCEED]: (state, action) => {
      const { safeTransfer } = action.payload;
      return {
        ...state,
        data: [...state.data, safeTransfer],
      };
    },

    [ActionTypes.TRANSACTION_ACTION_TYPES.TRANSACTION_CHANGE]: (state, action) => {
      const idx = state.data.findIndex(trans => trans.id === action.id);
      const nextData = (state.data[idx] = action.data);
      return { ...state, data: nextData };
    },
  },
  initialState,
);
