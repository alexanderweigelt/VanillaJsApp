import { Root } from "./core/Root";
import { App } from "./components/App";

const container = document.getElementById("app");

if (container) {
  const root = new Root(container);
  root.render(new App(container));
} else {
  console.error("Application root container not found.");
}
