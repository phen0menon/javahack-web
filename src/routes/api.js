export const hostnameEmulator = "http://95.216.137.74:8080/javahack-raiff-emulator-0.0.1-SNAPSHOT/";
export const hostnameCore = "http://95.216.137.74:8080/javahack-bugs-limited-0.0.1-SNAPSHOT/";

const getEmulatorUrl = route => `${hostnameEmulator}/${route}`;
const getCoreUrl = route => `${hostnameCore}/${route}`;

export default {
  register: getEmulatorUrl("user/reg"),
  login: getEmulatorUrl("user/login"),

  createTransfer: getCoreUrl("create"),
  getTransfers: id => getCoreUrl(`get_by_user/${id}`),
};
