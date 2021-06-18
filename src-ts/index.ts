import Dice from './dice';

const bodyElement = document.body;
const cubeContainerElement = document.querySelector<HTMLDivElement>(
  'body > div > div.cubeContainer'
)!;

const dice = new Dice(cubeContainerElement);

bodyElement.addEventListener('click', (event) => {
  event.preventDefault();

  dice.initDice();
  dice.rollDice();
});
