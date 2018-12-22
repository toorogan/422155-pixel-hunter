// import IntroScreen from './views/intro/intro';
import GreetingScreen from './views/greeting/greeting';

const main = document.getElementById(`main`);

const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

class Aplication {
  static run() {
    const greeting = new GreetingScreen();
    changeView(greeting);
  }
}

export default Aplication;
