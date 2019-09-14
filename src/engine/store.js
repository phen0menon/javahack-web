import rootReducer from "#/engine/reducers";
import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

const initialState = {};

const store = (() => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));

  return createStore(rootReducer, initialState, enhancer);
})();

export default store;
