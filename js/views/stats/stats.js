import StatsView from './stats-view';
import BackBtnView from '../back-btn/back-btn-view';
import HeaderView from '../header/header-view';
import Aplication from '../../aplication';

class StatsScreen {
  constructor(state, answers, playerName) {
    this.state = state;
    this.answers = answers;
    this.playerName = playerName;
    this.content = new StatsView(this.state, this.answers);
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
    this.backButton.onRestartClick = this.restart.bind(this);
  }

  restart() {
    Aplication.showGreeting();
  }
}
export default StatsScreen;
