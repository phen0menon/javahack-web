import React from "react";
import { render } from "react-dom";
import AppWrapper from "#/components/AppWrapper";
import Application from "#/components/Application";
import * as serviceWorker from "./serviceWorker";
import "#/styles/main.scss";

const rootElement = document.getElementById("root");
const DOMElement = (
  <AppWrapper>
    <Application />
  </AppWrapper>
);

render(DOMElement, rootElement);

serviceWorker.unregister();
