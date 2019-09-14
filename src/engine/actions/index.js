const prefixes = {
  session: "%%SESSION",
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

const TEST_ACTION_TYPES = createActionTypeGroup([...createStatefulAction("TEST")], "schedule");

export default {
  TEST_ACTION_TYPES,
};
