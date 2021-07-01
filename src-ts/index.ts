import Dice from './dice';

const sceneElement =
  document.querySelector<HTMLDivElement>('body > div.scene')!;
const cubeContainerElement = document.querySelector<HTMLDivElement>(
  'body > div > div.cubeContainer'
)!;

const dice = new Dice(cubeContainerElement);

sceneElement.addEventListener('click', () => {

  dice.initDice();
  dice.rollDice();
});
