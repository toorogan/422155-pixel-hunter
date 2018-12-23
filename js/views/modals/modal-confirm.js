import ModalConfirmView from './modal-confirm-view';
import Aplication from '../../aplication';

class ModalConfirmElement {
  constructor() {
    this.content = new ModalConfirmView();

    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);
    this.init();
  }

  get element() {
    return this.root;
  }

  init() {
    this.content.onCancel = this.cancel.bind(this);
    this.content.onConfirm = this.confirm.bind(this);
  }

  cancel() {
    this.root.removeChild(this.content.element);
  }

  confirm() {
    this.root.removeChild(this.content.element);
    Aplication.showGreeting();
  }
}
export default ModalConfirmElement;
