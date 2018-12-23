import AbstractView from "../abstract-view";
import GreetingScreen from "../greeting/greeting";
class IntroView extends AbstractView {
  get template() {
    return `<section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>`;
  }
  bind() {
    const main = document.getElementById(`main`);
    const asterisk = this.element.querySelector(`.intro__asterisk.asterisk`);
    asterisk.addEventListener(`click`, () => {
      main.innerHTML = ``;
      const greeting = new GreetingScreen();
      main.appendChild(greeting.element);
    });
  }
}
export default IntroView;
