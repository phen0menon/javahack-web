export const createReducer = (components, initialState) => (state = initialState, action) =>
  components.hasOwnProperty(action.type) ? components[action.type](state, action) : state;

export const isAuthenticated = () => {
  const unserializedToken = localStorage.getItem("token");
  const token = unserializedToken ? JSON.parse(unserializedToken) : "";
  return token ? true : false;
};

export const saveToken = token => {
  const serializedToken = JSON.stringify(token);
  localStorage.setItem("token", serializedToken);
};

export const destroySession = () => {
  localStorage.clear();
};
