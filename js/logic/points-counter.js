import {Limit, Rate, Answer} from '../data/constants';

const pointsCounter = (answers, lives) => {
  if (answers.length < Limit.LEVELS) {
    return `Fail`;
  }
  return answers.reduce((previous, current) => {
    if (current !== Answer.WRONG) {
      previous += Rate.CORRECT_ANSWER_POINTS;
      if (current === Answer.FAST) {
        return previous + Rate.FAST_ANSWER_BONUS;
      } else if (current === Answer.SLOW) {
        return previous - Rate.SLOW_ANSWER_FINE;
      }
    }
    return previous;
  }, 0) + lives * Rate.FOR_LIVE_BONUS;
};

export default pointsCounter;
