const prefixes = {
  session: "%%SESSION",
  user: "%%USER",
  transaction: "%%TRANSACTION",
  ui: "%%INTERFACE",
};

export const createActionTypeGroup = (actions, prefix) =>
  actions.reduce(
    (acc, action) => ({
      ...acc,
      [action]: `${prefixes[prefix]}/${action}`,
    }),
    {},
  );

export const createStatefulAction = action => [
  `${action}_START`,
  `${action}_SUCCEED`,
  `${action}_FAIL`,
];

const TRANSACTION_ACTION_TYPES = createActionTypeGroup(
  [...createStatefulAction("TRANSACTION_ADD"), ...createStatefulAction("GET_TRANSACTIONS")],
  "transaction",
);

const UI_ACTION_TYPES = createActionTypeGroup(["SET_ACTIVE_MENU_ITEM"], "ui");
const USER_ACTION_TYPES = createActionTypeGroup(
  [...createStatefulAction("USER_AUTHENTICATE")],
  "user",
);

export default {
  UI_ACTION_TYPES,
  USER_ACTION_TYPES,
  TRANSACTION_ACTION_TYPES,
};
