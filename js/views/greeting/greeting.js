import GreetingView from './greeting-view';
import Aplication from '../../aplication';

class GreetingScreen {
  constructor() {
    this.content = new GreetingView();
    this.root = document.createElement(`div`);
    this.root.classList.add(`greeting__place`);
    this.root.appendChild(this.content.element);
    this.init();
  }

  get element() {
    return this.root;
  }

  init() {
    this.content.onNextClick = this.click.bind(this);
  }

  click() {
    Aplication.showRules();
  }

}
export default GreetingScreen;
