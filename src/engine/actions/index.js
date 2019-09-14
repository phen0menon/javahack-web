const prefixes = {
  session: "%%SESSION",
  transaction: "%%transaction",
  ui: "%%interface",
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
  [...createStatefulAction("TRANSACTION_ADD")],
  "transaction",
);

const UI_ACTION_TYPES = createActionTypeGroup(["SET_ACTIVE_MENU_ITEM"], "ui");

export default {
  UI_ACTION_TYPES,
};
