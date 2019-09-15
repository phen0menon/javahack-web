import ActionTypes from "#/engine/actions";
import { postRequest } from "#/agent";
import apiRoutes from "#/routes/api";
import { saveToken } from "#/engine/util";

export const login = data => (dispatch, getState) => {
  dispatch({ type: ActionTypes.USER_ACTION_TYPES.USER_AUTHENTICATE_START });
  return postRequest(apiRoutes.login, data)
    .then(json => {
      dispatch({ type: ActionTypes.USER_ACTION_TYPES.USER_AUTHENTICATE_SUCCEED, payload: json });
      saveToken(json.id);
    })
    .catch(err => {
      dispatch({ type: ActionTypes.USER_ACTION_TYPES.USER_AUTHENTICATE_FAIL });
    });
};
