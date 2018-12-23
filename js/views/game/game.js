import BackBtnView from '../back-btn/back-btn-view';
import HeaderGameView from '../header/header-game-view';
import GameView from './game-view';
import Aplication from '../../aplication';
import {resizeImages} from '../../logic/resize-image';

const TICK_INTERVAL = 1000;

class GameScreen {
  constructor(model) {
    this.model = model;
    this.content = new GameView(this.model.getCurrentLevel(), this.model.answers);
    this.gameHeader = new HeaderGameView(this.model.state);
    this.backButton = new BackBtnView();

    this.root = document.createElement(`div`);
    this.createHeaderElement();
    this.root.appendChild(this.header);
    this.root.appendChild(this.content.element);
    this._interval = null;
    this.updateHeader();
  }


  get element() {
    return this.root;
  }
  createHeaderElement() {
    this.header = document.createElement(`header`);
    this.header.className = `header`;
    this.insertChildren(this.header, [this.backButton.element.children[0], this.gameHeader.element.children[0], this.gameHeader.element.children[1]]);


  }
  stopGame() {
    clearInterval(this._interval);
  }

  startGame() {
    this.model.resetTime();
    this.changeLevel();

    this._interval = setInterval(() => {
      if (!this.model.isTimeEnd()) {
        this.model.tick();
        this.updateTimer();
      } else {
        this.answer(false);
      }
    }, TICK_INTERVAL);
  }

  answer(answer) {
    this.stopGame();
    if (answer) {
      this.model.generateTrueAnswer();
    } else {
      this.model.die();
      this.model.generateFalseAnswer();
    }
    if (this.model.isDead() || this.model.isEnd()) {
      this.endGame();
    } else {
      this.model.goToNextLevel();
      this.startGame();
    }
  }

  restart() {
    Aplication.showModalConfirm();
  }

  updateHeader() {
    const gameHeader = new HeaderGameView(this.model.state);
    const backButton = new BackBtnView();

    this.header.innerHTML = ``;
    this.insertChildren(this.header, [backButton.element.children[0], gameHeader.element.children[0], gameHeader.element.children[1]]);

    this.gameHeader = gameHeader;
    this.backButton = backButton;
    this.backButton.onRestartClick = this.restart.bind(this);
  }
  updateTimer() {
    const timer = this.header.querySelector(`.game__timer`);
    timer.innerText = this.model.state.time;
  }
  insertChildren(element, childNodes) {
    for (let child of childNodes) {
      element.appendChild(child);
    }

  }
  changeLevel() {
    this.updateHeader();
    const level = new GameView(this.model.getCurrentLevel(), this.model.answers);
    level.onAnswer = this.answer.bind(this);
    this.changeContentView(level);
  }

  endGame() {
    Aplication.showStats(this.model.state, this.model.answers, this.model.playerName);
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
    resizeImages(view.element);
  }
}
export default GameScreen;
