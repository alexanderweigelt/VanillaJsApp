import { Component } from "../core/Component";
import { State } from "../core/State";
import { FindMe, MeApi } from "@my-client/find-me";
import { FindYou, YouApi } from "@my-client/find-you";

export class YouAndMe implements Component {
  private state: State<number>;
  private maxState: number;
  private container: HTMLElement;
  private meApi: MeApi;
  private youApi: YouApi;
  private data: {
    me?: FindMe;
    you?: FindYou;
  } | null;

  constructor(container: HTMLElement) {
    this.container = container;
    this.state = new State<number>(1, () => this.mount());
    this.maxState = 11;
    this.meApi = new MeApi();
    this.youApi = new YouApi();
    this.data = null;
  }

  private addProperty = async () => {
    let htmlObject = document.createElement("div");
    await this.getYouAndMe();
    this.state.set(this.state.get() + 1);
    htmlObject.innerHTML = `
      <p><strong>Me:</strong> ${this.data?.me?.property ?? "unknown"}</p>
      <p><strong>You:</strong> ${this.data?.you?.property ?? "unknown"}</p> 
    `;
    document.getElementById("property")?.appendChild(htmlObject);
  };

  private getYouAndMe = (): Promise<void> => {
    let me: FindMe | undefined = undefined;
    let you: FindYou | undefined = undefined;
    const meId: number = this.state.get();

    return this.meApi
      .getMeById({ meId })
      .then((response: FindMe) => {
        me = response;
        if (!me.youId) {
          throw new Error("Me has no relations to you");
        }
        return this.youApi.getYouById({ youId: me.youId });
      })
      .then((response: FindYou) => {
        you = response;
        if (me && you) {
          this.data = {
            me,
            you,
          };
          return;
        }
        throw new Error("No data were found for you and me!");
      })
      .catch((err: Error) => {
        console.error(err.message);
        return;
      });
  };

  render = (): string => {
    const isDisabled = this.state.get() === this.maxState ? " disabled" : "";
    try {
      return `
        <button id="add"${isDisabled}>Get property of you and me</button>
        <div id="property"></div>
      `;
    } catch (error) {
      let message;
      if (error instanceof Error) {
        message = error.message;
      } else {
        message = String(error);
      }
      console.error(error);
      return `<p>${message}</p>`;
    }
  };

  mount() {
    this.container.innerHTML = this.render();
    document.getElementById("add")?.addEventListener("click", this.addProperty);
  }
}
