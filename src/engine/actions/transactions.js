import ActionTypes from "#/engine/actions";
import { postRequest, getRequest } from "#/agent";
import apiRoutes from "#/routes/api";

export const getTransactions = data => (dispatch, getState) => {
  // we use id as user's token
  const { token: id } = getState().user;

  dispatch({ type: ActionTypes.TRANSACTION_ACTION_TYPES.GET_TRANSACTIONS_START });
  return getRequest(apiRoutes.getTransfers(id))
    .then(json => {
      dispatch({
        type: ActionTypes.TRANSACTION_ACTION_TYPES.GET_TRANSACTIONS_SUCCEED,
        payload: json,
      });
    })
    .catch(err => {
      dispatch({ type: ActionTypes.TRANSACTION_ACTION_TYPES.GET_TRANSACTIONS_FAIL });
    });
};

export const createTransaction = data => (dispatch, getState) => {
  const { token: id } = getState().user;
  const payload = { ...data, userId: id };

  dispatch({ type: ActionTypes.TRANSACTION_ACTION_TYPES.TRANSACTION_ADD_START });
  return postRequest(apiRoutes.createTransfer, payload)
    .then(json => {
      dispatch({
        type: ActionTypes.TRANSACTION_ACTION_TYPES.TRANSACTION_ADD_SUCCEED,
        payload: json,
      });
      return json;
    })
    .catch(err => {
      dispatch({ type: ActionTypes.TRANSACTION_ACTION_TYPES.TRANSACTION_ADD_FAIL });
    });
};

export const changeTransaction = (id, data) => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.TRANSACTION_ACTION_TYPES.TRANSACTION_CHANGE,
    payload: { id, data },
  });
};
