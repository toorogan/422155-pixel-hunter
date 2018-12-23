import AbstractView from '../abstract-view';

class HeaderView extends AbstractView {
  get template() {
    return `<header class="header"></header>`;
  }
}
export default HeaderView;
