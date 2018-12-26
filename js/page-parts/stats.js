import {Limit} from "../data/constants";

const statsPart = (answers) => {
  let stat = answers.reduce((previous, current) => {
    return (
      previous + `<li class="stats__result stats__result--${current}"></li>`
    );
  }, ``);

  if (answers.length < Limit.LEVELS) {
    for (let i = 0; i < Limit.LEVELS - answers.length; i++) {
      stat += `<li class="stats__result stats__result--unknown"></li>`;
    }
  }
  return `<ul class="stats">${stat}</ul>`;
};

export default statsPart;
