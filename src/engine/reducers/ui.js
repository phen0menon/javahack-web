import { createReducer } from "#/engine/util";
import ActionTypes from "../actions";

const initialState = {
  activeMenuItem: 1,
};

export default createReducer(
  {
    [ActionTypes.UI_ACTION_TYPES.SET_ACTIVE_MENU_ITEM]: (state, action) => ({
      ...state,
      activeMenuItem: action.payload,
    }),
  },
  initialState,
);
