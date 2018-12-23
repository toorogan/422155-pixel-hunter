// import IntroScreen from "./views/intro/intro";

// import GreetingScreen from './views/greeting/greeting';

// import Network from "./network";
import ModalErrorView from './views/modals/modal-error-view';

const ANIMATION_OUT = 3000;

const main = document.getElementById(`main`);
// let questData;

const removeIntro = () => {
  const introPlace = document.querySelector(`.loader`);
  if (introPlace) {
    const greetingPlace = document.querySelector(`.loader`);
    main.removeChild(introPlace);
    greetingPlace.classList.remove(`loader`);
  }
};

// const changeView = (element) => {
//   main.innerHTML = ``;
//   main.appendChild(element);
// };

class Aplication {
  static run() {

  }
  static showError(error) {
    const modalError = new ModalErrorView(error);
    main.appendChild(modalError.element);
  }
  static runGreeting() {

    setTimeout(removeIntro, ANIMATION_OUT);
  }
}

export default Aplication;
