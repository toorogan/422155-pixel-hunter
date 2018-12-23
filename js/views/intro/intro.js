import IntroView from "./intro-view";

class IntroScreen {
  constructor() {
    this.content = new IntroView();
    this.root = document.createElement(`div`);
    this.root.classList.add(`loader`);
    this.root.appendChild(this.content.element);
  }

  get element() {
    return this.root;
  }
}
export default IntroScreen;
