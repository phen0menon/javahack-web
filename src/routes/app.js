import Auth from "#/scenes/Auth";
import Customer from "#/scenes/Customer";
import Main from "#/scenes/Main";

export default [
  {
    exact: true,
    path: "/",
    component: Auth,
  },
  {
    exact: false,
    path: "/cabinet",
    component: Main,
  },
  {
    exact: false,
    path: "/customer",
    component: Customer,
  },
];
