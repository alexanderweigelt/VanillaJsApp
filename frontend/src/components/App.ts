import { YouAndMe } from "./YouAndMe";

export class App {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  render(): string {
    return `
    <h2>Properties of you and me</h2>
    <div id="app-container"></div>
    `;
  }

  mount() {
    this.container.innerHTML = this.render();

    const appContainer = document.getElementById("app-container");
    if (appContainer) {
      const counter = new YouAndMe(appContainer);
      counter.mount();
    }
  }
}
