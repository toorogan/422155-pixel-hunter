import AbstractView from '../abstract-view';
import statsTableTemplate from '../../page-parts/stats-table';

class ScoreboardView extends AbstractView {

  get template() {
    return `
<div class="end">
  <div class="scoreboard">Предыдущие результаты прохождения игры загружаются...</div>
</div>`;
  }

  bind() {
    this._scoreBoardContainer = this.element.querySelector(`div.scoreboard`);
  }

  showScores(scores) {
    this._scoreBoardContainer.innerHTML = ``;
    if (scores.length > 1) {
      scores.pop();
      scores.reverse();
      this._scoreBoardContainer.innerHTML = `
      ${scores.map((it, i) => statsTableTemplate(it, it.stats, i + 2)).join(``)}`;
    }
  }
}
export default ScoreboardView;
