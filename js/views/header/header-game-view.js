import AbstractView from '../abstract-view';
import {Limit} from '../../data/constants';

class HeaderGameView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return `<div class="game__timer">${this.state.time}</div>
    <div class="game__lives">
    ${new Array(Limit.LIVES - this.state.lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="31" height="27">`)
      .join(``)}
    ${new Array(this.state.lives - 1)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
      .join(``)}
    </div>`;
  }

}

export default HeaderGameView;
