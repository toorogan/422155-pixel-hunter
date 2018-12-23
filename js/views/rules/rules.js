import RulesView from './rules-view';
import BackBtnView from '../back-btn/back-btn-view';
import HeaderView from '../header/header-view';
import Aplication from '../../aplication';

class RulesScreen {
  constructor() {
    this.content = new RulesView();
    this.backButton = new BackBtnView();
    this.header = new HeaderView();
    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element.appendChild(this.backButton.element));
    this.root.appendChild(this.content.element);
    this.init();
  }

  get element() {
    return this.root;
  }

  init() {
    this.content.onNextClick = this.click.bind(this);
    this.backButton.onRestartClick = this.restart.bind(this);
  }

  click(name) {
    Aplication.showGame(name);
  }

  restart() {
    Aplication.showGreeting();
  }
}
export default RulesScreen;
