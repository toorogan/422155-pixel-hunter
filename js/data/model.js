import {INITIAL_GAME, Limit, Answer} from "./constants";

const generateAnswerStat = (answerStatus, time) => {
  const answerResult = {
    correctAnswer: answerStatus,
    answerTime: time
  };
  return answerResult;
};

const generateState = (game) => {
  return Object.assign({}, game);
};

const tick = (time) => {
  if (time > 0) {
    time--;
  }
  return time;
};

const convertAnswersArr = (arr) => {
  let results = arr.map((el) => {
    let answer;
    if (el.correctAnswer) {
      if (el.answerTime > Limit.TIME - Limit.FAST_TIME) {
        answer = Answer.FAST;
      } else if (el.answerTime < Limit.TIME - Limit.SLOW_TIME) {
        answer = Answer.SLOW;
      } else {
        answer = Answer.CORRECT;
      }
    } else {
      answer = Answer.WRONG;
    }
    return answer;
  });
  return results;
};

class GameModel {
  constructor(data, playerName) {
    this.data = data;
    this.playerName = playerName;
    this.restart();
  }

  get state() {
    return this._state;
  }

  get answers() {
    return convertAnswersArr(this._answers);
  }
  restart() {
    this._state = generateState(INITIAL_GAME);
    this._answers = [];
  }

  generateTrueAnswer() {
    this._answers.push(generateAnswerStat(true, this._state.time));
  }

  generateFalseAnswer() {
    this._answers.push(generateAnswerStat(false, this._state.time));
  }

  goToNextLevel() {
    this._state.level++;
  }

  getLevel(levelNumber) {
    return this.data[`game-${levelNumber}`];
  }

  getCurrentLevel() {
    return this.getLevel(this._state.level);
  }

  tick() {
    this._state.time = tick(this._state.time);
  }

  resetTime() {
    this._state.time = Limit.TIME;
  }
  isDead() {
    return this._state.lives === 0;
  }
  isTimeEnd() {
    return this._state.time === 0;
  }

  isEnd() {
    return this._state.level === Limit.LEVELS;
  }
  die() {
    this._state.lives--;
  }
}

export default GameModel;
