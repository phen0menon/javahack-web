import ActionTypes from "#/engine/actions";

export const setActiveMenuItem = menuItem => (dispatch, getState) => {
  dispatch({ type: ActionTypes.UI_ACTION_TYPES.SET_ACTIVE_MENU_ITEM, payload: menuItem });
};
