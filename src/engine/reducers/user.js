import { createReducer } from "#/engine/util";
import ActionTypes from "../actions";

const loadStateFromLocalStorage = () => ({
  token: (() => {
    const l = localStorage.getItem("token");
    return l ? JSON.parse(l) : null;
  })(),
});

const initialState = {
  userData: {},
  ...loadStateFromLocalStorage(),
};

export default createReducer(
  {
    [ActionTypes.USER_ACTION_TYPES.USER_AUTHENTICATE_SUCCEED]: (state, action) => ({
      ...state,
      userData: action.payload,
    }),
  },
  initialState,
);
