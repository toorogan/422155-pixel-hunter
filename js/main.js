'use strict';

const templates = Array.from(document.querySelectorAll(`template`));
let currentScreen = 0;
const renderScreen = (screenIndex) => {
  if (screenIndex > templates.length || screenIndex < 0) {
    return;
  }
  const main = document.getElementById(`main`);
  main.innerHTML = ``;
  main.appendChild(templates[screenIndex].content.cloneNode(true));

};


const buttons = document.createElement(`div`);
buttons.innerHTML = `<div class="arrows__wrap">
        <style>
        .arrows__wrap {
            position: absolute;
            top: 95px;
            left: 50%;
            margin-left: -56px;
        }
        .arrows__btn {
            background: none;
            border: 2px solid black;
            padding: 5px 20px;
        }
        </style>
        <button class="arrows__btn"><-</button>
        <button class="arrows__btn">-></button>
        </div>`;
const buttonLeft = buttons.querySelectorAll(`.arrows__btn`)[0];
const buttonRight = buttons.querySelectorAll(`.arrows__btn`)[1];

buttonLeft.addEventListener(`click`, () => {
  renderScreen(currentScreen--);
});
buttonRight.addEventListener(`click`, () => {
  renderScreen(currentScreen++);
});
renderScreen(currentScreen);
document.body.appendChild(buttons);

