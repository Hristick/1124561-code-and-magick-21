'use strict';

const NUMBER_OF_WIZARDS = 4;
const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашинктон'];
const WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

let getRandomValue = (array) => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};

let userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

let similarListElement = document.querySelector('.setup-similar-list');
let similarWizardTemplate = document
  .querySelector(`#similar-wizard-template`)
  .content.querySelector(`.setup-similar-item`);


let getNewWizard = (WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLOR, EYES_COLOR) => {
  let wizardsArray = [];
  for (let i = 0; i < NUMBER_OF_WIZARDS; i++) {
    wizardsArray.push({
      name: getRandomValue(WIZARD_NAMES),
      surname: getRandomValue(WIZARD_SURNAMES),
      coat: getRandomValue(COAT_COLOR),
      eyes: getRandomValue(EYES_COLOR),
    });
  }

  console.log(wizardsArray);
  return wizardsArray;
};

let renderWizard = (wizard) => {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent =
  `${ wizard.name } ${ wizard.surname }`;

  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coat;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyes;

  return wizardElement;
};
let getSetting = () => {
  let fragment = document.createDocumentFragment();
  let array = getNewWizard(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLOR, EYES_COLOR);

  array.forEach((item) => {
    fragment.appendChild(renderWizard(item));

  });

  similarListElement.appendChild(fragment);
};
getSetting();













