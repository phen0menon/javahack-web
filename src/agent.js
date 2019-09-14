import store from "#/engine/store";
import _ from "lodash";

export const constructGenericRequestHeaders = () => ({
  "Content-Type": "application/json",
});

const getAuthToken = () => "";

export const constructRequestHeaders = (params = {}) => {
  const authToken = getAuthToken();
  return {
    ...constructGenericRequestHeaders(),
    ...(authToken ? { Authorization: `Token ${authToken}` } : {}),
    ...params,
  };
};

const badRequestHandler = response => {};
const badGatewayHandler = response => {};
const serviceUnavailableHandler = response => {};

const responseErrorHandlers = response => ({
  400: response => badRequestHandler(response),
  502: response => badGatewayHandler(response),
  503: response => serviceUnavailableHandler(response),
});

const getErrorHandler = response => {
  return _.get(responseErrorHandlers, response.status, () => {
    console.error(`An error occured while sending a request with status ${response.status}`);
  });
};

const initialResponseHandler = response => {
  if (!response.ok) {
    getErrorHandler(response);
  }
  return response.json();
};

export const postRequest = (url, body = {}) =>
  fetch(url, {
    method: "POST",
    headers: constructRequestHeaders(),
    body: JSON.stringify(body),
  }).then(initialResponseHandler);

export const getRequest = url =>
  fetch(url, {
    headers: constructRequestHeaders(),
  }).then(initialResponseHandler);

export const putRequest = url =>
  fetch(url, {
    method: "PUT",
    headers: constructRequestHeaders(),
  }).then(initialResponseHandler);

export const deleteRequest = url =>
  fetch(url, {
    method: "DELETE",
    headers: constructRequestHeaders(),
  }).then(initialResponseHandler);
