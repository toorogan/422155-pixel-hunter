import AbstractView from '../abstract-view';

const ENTER_KEY_CODE = 13;

class BackBtnView extends AbstractView {

  get template() {
    return `<button class="back">
    <span class="visually-hidden">Вернуться к началу</span>
    <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
      <use xlink:href="img/sprite.svg#arrow-left"></use>
    </svg>
    <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
      <use xlink:href="img/sprite.svg#logo-small"></use>
    </svg>
  </button>`;
  }

  bind(element) {
    const backButton = element.querySelector(`button.back`);

    const onRestartButtonClick = () => {
      this.onRestartClick();
      backButton.removeEventListener(`click`, onRestartButtonClick);
    };

    backButton.addEventListener(`click`, onRestartButtonClick);

    backButton.addEventListener(`keydown`, ({keyCode}) => {
      if (keyCode === ENTER_KEY_CODE) {
        onRestartButtonClick();
      }
    });
  }

  onRestartClick() {
  }
}
export default BackBtnView;
