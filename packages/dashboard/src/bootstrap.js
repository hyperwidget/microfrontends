import { createApp } from "vue";
import Dashboard from "./components/dashboard.vue";

// Mount to start up app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// if in dev && in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// We are running in container, export the mount function
export { mount };
