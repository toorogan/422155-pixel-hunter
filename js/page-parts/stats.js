import {Limit} from "../data/constatns";

const statsPart = (answersArray) => {
  let stat = answersArray.reduce((previous, current) => {
    return (
      previous + `<li class="stats__result stats__result--${current}"></li>`
    );
  }, ``);

  if (answersArray.length < Limit.LEVELS) {
    for (let i = 0; i < Limit.LEVELS - answersArray.length; i++) {
      stat += `<li class="stats__result stats__result--unknown"></li>`;
    }
  }
  return `<ul class="stats">${stat}</ul>`;
};

export default statsPart;
