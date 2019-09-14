export const createReducer = (components, initialState) => (state = initialState, action) =>
  components.hasOwnProperty(action.type) ? components[action.type](state, action) : state;
