import Auth from "#/scenes/Auth";
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
];
