import { createReducer } from "#/engine/util";
import ActionTypes from "../actions";

const initialState = {
  test: false,
};

export default createReducer(
  {
    [ActionTypes.TEST_ACTION_TYPES.TEST_START]: (state, action) => ({
      ...state,
      test: true,
    }),
  },
  initialState,
);
