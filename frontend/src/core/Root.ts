import { Component } from "./Component";

export class Root {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  render(component: Component) {
    this.container.innerHTML = component.render();
    component.mount();
  }
}
