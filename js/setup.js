'use strict';

const wizardsCount = 4;
const wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашинктон'];
const wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

const getRandomValue = (array) => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};

const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

const similarListElement = document.querySelector('.setup-similar-list');
const similarWizardTemplate = document
  .querySelector(`#similar-wizard-template`)
  .content.querySelector(`.setup-similar-item`);


const getNewWizard = (wizardNames, wizardSurnames, coatColor, eyesColor) => {
  const wizardsArray = [];
  for (let i = 0; i < wizardsCount; i++) {
    wizardsArray.push({
      name: getRandomValue(wizardNames),
      surname: getRandomValue(wizardSurnames),
      coat: getRandomValue(coatColor),
      eyes: getRandomValue(eyesColor),
    });
  }
  return wizardsArray;
};

const renderWizard = (wizard) => {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent =
  `${ wizard.name } ${ wizard.surname }`;

  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coat;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyes;

  return wizardElement;
};
const getSetting = () => {
  let fragment = document.createDocumentFragment();
  let array = getNewWizard(wizardNames, wizardSurnames, coatColor, eyesColor);

  array.forEach((item) => {
    fragment.appendChild(renderWizard(item));
  });

  similarListElement.appendChild(fragment);
};
getSetting();
