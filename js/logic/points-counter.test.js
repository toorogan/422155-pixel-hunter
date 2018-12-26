import {assert} from "chai";
import pointsCounter from "./points-counter";
import {Answer} from '../data/constants';

const makeArrayOfAnswers = (answeredQuestions, correct, slow, fast) => {
  const answers = [];
  for (let i = 0; i < answeredQuestions; i++) {
    if (fast > i) {
      answers.push(Answer.FAST);
    } else if (slow > i - fast) {
      answers.push(Answer.SLOW);
    } else if (answeredQuestions - correct > i - fast - slow) {
      answers.push(Answer.WRONG);
    } else {
      answers.push(Answer.CORRECT);
    }
  }
  return answers;
};

describe(`checking points system`, () => {
  it(`should return 650`, () => {
    const array = makeArrayOfAnswers(10, 5, 0, 0);
    assert.equal(pointsCounter(array, 3), 650);
  });

  it(`should return 1150`, () => {
    const array = makeArrayOfAnswers(10, 10, 0, 0);
    assert.equal(pointsCounter(array, 3), 1150);
  });
  it(`should return 500`, () => {
    const array = makeArrayOfAnswers(10, 5, 0, 0);
    assert.equal(pointsCounter(array, 0), 500);
  });
  it(`should return 1050`, () => {
    const array = makeArrayOfAnswers(10, 10, 0, 0);
    assert.equal(pointsCounter(array, 1), 1050);
  });
  it(`should return 1000`, () => {
    const array = makeArrayOfAnswers(10, 10, 0, 0);
    assert.equal(pointsCounter(array, 0), 1000);
  });
  it(`should return "Fail"`, () => {
    const array = makeArrayOfAnswers(9, 0, 0, 0);
    assert.equal(pointsCounter(array, 2), `Fail`);
  });
});
