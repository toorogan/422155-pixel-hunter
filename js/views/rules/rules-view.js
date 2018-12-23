import AbstractView from '../abstract-view';

class RulesView extends AbstractView {

  get template() {
    return `<section class="rules">
    <h2 class="rules__title">Правила</h2>
    <ul class="rules__description">
      <li>Угадай 10 раз для каждого изображения фото
        <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
        <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
      <li>Фотографиями или рисунками могут быть оба изображения.</li>
      <li>На каждую попытку отводится 30 секунд.</li>
      <li>Ошибиться можно не более 3 раз.</li>
    </ul>
    <p class="rules__ready">Готовы?</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </section>`;
  }

  bind() {
    const rulesForm = this.element.querySelector(`.rules__form`);
    const rulesButton = rulesForm.querySelector(`.rules__button`);
    const rulesInput = rulesForm.querySelector(`.rules__input`);

    const onRulesInputChange = () => {
      rulesButton.disabled = !rulesInput.value.trim().length;
    };

    rulesInput.addEventListener(`input`, onRulesInputChange);

    const resetForm = () => {
      rulesButton.disabled = true;
      rulesInput.value = ``;
    };

    const onSubmitButtonClick = (evt) => {
      evt.preventDefault();
      const newName = rulesInput.value;
      this.onNextClick(newName);
      resetForm();

      rulesInput.removeEventListener(`input`, onRulesInputChange);
      rulesForm.removeEventListener(`submit`, onSubmitButtonClick);
    };

    rulesForm.addEventListener(`submit`, (evt) => {
      onSubmitButtonClick(evt);
    });
  }

  onNextClick(name) {
    return name;
  }
}
export default RulesView;
