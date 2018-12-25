import Network from './network';
import GameModel from './data/model';

import IntroScreen from "./views/intro/intro";
import GreetingScreen from './views/greeting/greeting';
import RulesScreen from './views/rules/rules';
import GameScreen from './views/game/game';
import StatsScreen from './views/stats/stats';

import ScoreboardView from './views/scoreboard/scoreboard-view';

import ModalErrorView from './views/modals/modal-error-view';
import ModalConfirmElement from './views/modals/modal-confirm';


const main = document.getElementById(`main`);

let questData;

const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};


class Aplication {
  static run() {
    const intro = new IntroScreen();
    changeView(intro.element);
    Network.loadData().
    then((data) => {
      questData = data;
    }).catch(Aplication.showError);
  }
  static showError(error) {
    const modalError = new ModalErrorView(error);
    main.parentNode.appendChild(modalError.element);
  }

  static showGreeting() {
    const greeting = new GreetingScreen();
    changeView(greeting.element);
    greeting.element.classList.remove(`greeting__place`);
  }
  static showRules() {
    const rules = new RulesScreen();
    changeView(rules.element);
  }
  static showGame(playerName) {
    const gameScreen = new GameScreen(new GameModel(questData, playerName));
    changeView(gameScreen.element);
    gameScreen.startGame();
  }
  static showModalConfirm() {
    const modalConfirm = new ModalConfirmElement();
    main.parentNode.appendChild(modalConfirm.element);
  }
  static showStats(state, answers, name) {
    const statistics = new StatsScreen(state, answers);
    changeView(statistics.element);
    const playerName = name;
    const scoreBoard = new ScoreboardView();
    const container = document.querySelector(`.result`);
    container.appendChild(scoreBoard.element);
    Network.saveResults(answers, state.lives, playerName).
    then(() => Network.loadResults(playerName)).
    then((data) => scoreBoard.showScores(data)).
    catch(Aplication.showError);
  }

}

export default Aplication;
