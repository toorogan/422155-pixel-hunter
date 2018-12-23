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

    const onCancelClick = (evt) => {
      evt.stopPropagation();
      evt.preventDefault();
      cancelButton.removeEventListener(`click`, onCancelClick);
      closeButton.removeEventListener(`click`, onCancelClick);

      this.onCancel();
    };

    cancelButton.addEventListener(`click`, onCancelClick);
    closeButton.addEventListener(`click`, onCancelClick);

    const onConfirmClick = (evt) => {
      evt.stopPropagation();
      evt.preventDefault();
      confirmButton.removeEventListener(`click`, onConfirmClick);

      this.onConfirm();
    };

    confirmButton.addEventListener(`click`, (evt) => {
      onConfirmClick(evt);
    });
  }

  onCancel() {
  }

  onConfirm() {
  }
}
