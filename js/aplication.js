import {renderScreen} from "./logic/utils";
import introScreen from "./screens/intro";

renderScreen(introScreen);

const main = document.getElementById(`main`);

const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

class Aplication {
  static run() {
    changeView();
  }
}

export default Aplication;
