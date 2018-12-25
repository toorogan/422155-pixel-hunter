import AbstractView from '../abstract-view';
import getStatsTableTemplate from '../../page-parts/stats-table';

class StatsView extends AbstractView {
  constructor(state, answers) {
    super();
    this.state = state;
    this.answers = answers;
  }

  get template() {
    return `<section class="result"><h2 class="result__title">${this.state.lives ? `Победа!` : `Проигрыш`}</h2>${getStatsTableTemplate(this.state, this.answers, 1)}</section>`;
  }
}
export default StatsView;
