import {assert} from "chai";
import pointsCounter from "./points-counter";

const makeArrayOfAnswers = (answeredQuestions, correct, slow, fast) => {
  const answersArray = [];
  for (let i = 0; i < answeredQuestions; i++) {
    if (fast > i) {
      answersArray.push(`fast`);
    } else if (slow > i - fast) {
      answersArray.push(`slow`);
    } else if (answeredQuestions - correct > i - fast - slow) {
      answersArray.push(`wrong`);
    } else {
      answersArray.push(`correct`);
    }
  }
  return answersArray;
};

describe(`checking points system`, () => {
  it(`should return 650`, () => {
    const answersArray = makeArrayOfAnswers(10, 5, 0, 0);
    assert.equal(pointsCounter(answersArray, 3), 650);
  });

  it(`should return 1150`, () => {
    const answersArray = makeArrayOfAnswers(10, 10, 0, 0);
    assert.equal(pointsCounter(answersArray, 3), 1150);
  });
  it(`should return 500`, () => {
    const answersArray = makeArrayOfAnswers(10, 5, 0, 0);
    assert.equal(pointsCounter(answersArray, 0), 500);
  });
  it(`should return 1050`, () => {
    const answersArray = makeArrayOfAnswers(10, 10, 0, 0);
    assert.equal(pointsCounter(answersArray, 1), 1050);
  });
  it(`should return 1000`, () => {
    const answersArray = makeArrayOfAnswers(10, 10, 0, 0);
    assert.equal(pointsCounter(answersArray, 0), 1000);
  });
  it(`should return "Fail"`, () => {
    const answersArray = makeArrayOfAnswers(9, 0, 0, 0);
    assert.equal(pointsCounter(answersArray, 2), `Fail`);
  });
});
