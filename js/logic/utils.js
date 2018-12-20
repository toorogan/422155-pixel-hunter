

export const getElementFromTemplate = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element;
};
export const renderScreen = (element) => {
  const main = document.getElementById(`main`);
  main.innerHTML = ``;
  main.appendChild(element);

};


export const checkGameRadio = (inputsArray, nextScreen, currentScreen) => {
  inputsArray.forEach((item) => {
    item.addEventListener(`change`, () => {
      if (item.checked) {
        clearInputs(currentScreen);
        renderScreen(nextScreen);
      }
    });
  });
};
export const checkGameClick = (elementsArray, nextScreen) => {
  elementsArray.forEach((item) => {
    item.addEventListener(`click`, () => {
      renderScreen(nextScreen);
    });
  });
};
export const clearInputs = (screen) => {
  const itemsArray = Array.from(screen.querySelectorAll(`input`));
  itemsArray.forEach((item) => {
    item.checked = false;
    item.value = ``;
  });
};
