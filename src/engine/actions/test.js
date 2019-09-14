import ActionTypes from "#/engine/actions";
import { getRequest } from "#/agent";
import apiRoutes from "#/routes/api";

export const testFetch = () => (dispatch, getState) => {
  dispatch({ type: ActionTypes.TEST_ACTION_TYPES.TEST_START });
  return getRequest(apiRoutes.faculties)
    .then(json => {})
    .catch(err => {
      throw err;
    });
};
