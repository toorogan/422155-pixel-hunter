import {getElementFromTemplate, renderScreen} from '../logic/utils';
import greetingScreen from './greeting';

const introScreen = getElementFromTemplate(
    `    <section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>`
);
introScreen.querySelector(`.intro__asterisk.asterisk`).addEventListener(`click`, () => {
  renderScreen(greetingScreen);
});


export default introScreen;
