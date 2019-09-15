export const hostnameEmulator = "http://95.216.137.74:8080/javahack-raiff-emulator-0.0.1-SNAPSHOT/";
export const hostnameCore = "http://95.216.137.74:8080/javahack-bugs-limited-0.0.1-SNAPSHOT/";

const getEmulatorUrl = route => `${hostnameEmulator}${route}`;
const getCoreUrl = route => `${hostnameCore}${route}`;

export default {
  register: getEmulatorUrl("user/reg"),
  login: getEmulatorUrl("user/login"),

  createTransfer: getCoreUrl("create"),
  createTransferEmailLink: id => getCoreUrl(`${id}/new_email_link`),
  checkTransfer: (id, value) => getCoreUrl(`${id}/check?value=${value}`),
  getTransfers: id => getCoreUrl(`get_by_user/${id}`),

  putEmail: getCoreUrl("put_email"),
  addMoney: userId => getEmulatorUrl(`account/${userId}/add`),
  finalize: token => getCoreUrl(`/finalize?token=${token}`),
};
