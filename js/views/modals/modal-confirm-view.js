import AbstractView from '../abstract-view';

export default class ModalConfirmView extends AbstractView {

  get template() {
    return ` <section class="modal">
    <form class="modal__inner">
      <button class="modal__close" type="button">
        <span class="visually-hidden">Закрыть</span>
      </button>
      <h2 class="modal__title">Подтверждение</h2>
      <p class="modal__text">Вы уверены что хотите начать игру заново?</p>
      <div class="modal__button-wrapper">
        <button class="modal__btn">Ок</button>
        <button class="modal__btn">Отмена</button>
      </div>
    </form>
  </section>`;
  }

  bind() {
    const closeButton = this.element.querySelector(`.modal__close`);
    const cancelButton = this.element.querySelector(`.modal__btn:last-child`);
    const confirmButton = this.element.querySelector(`.modal__btn:first-child`);

    const doOnCancelClick = (evt) => {
      evt.stopPropagation();
      evt.preventDefault();
      cancelButton.removeEventListener(`click`, doOnCancelClick);
      closeButton.removeEventListener(`click`, doOnCancelClick);

      this.onCancel();
    };

    cancelButton.addEventListener(`click`, doOnCancelClick);
    closeButton.addEventListener(`click`, doOnCancelClick);

    const doOnConfirmClick = (evt) => {
      evt.stopPropagation();
      evt.preventDefault();
      confirmButton.removeEventListener(`click`, doOnConfirmClick);

      this.onConfirm();
    };

    confirmButton.addEventListener(`click`, (evt) => {
      doOnConfirmClick(evt);
    });
  }

  onCancel() {
  }

  onConfirm() {
  }
}
