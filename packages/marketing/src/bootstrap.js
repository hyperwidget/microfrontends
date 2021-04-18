import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

// Mount to start up app

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// if in dev && in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketting-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// We are running in container, export the mount function
export { mount };
