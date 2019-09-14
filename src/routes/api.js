export const hostname = "http://localhost:3000";

const getAbsoluteUrl = route => `${hostname}/${route}`;

export default {
  test: getAbsoluteUrl("test"),
};
