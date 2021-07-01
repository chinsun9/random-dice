import Dice from './dice';

const sceneElement =
  document.querySelector<HTMLDivElement>('body > div.scene')!;
const cubeContainerElement = document.querySelector<HTMLDivElement>(
  'body > div > div.cubeContainer'
)!;

const dice = new Dice(cubeContainerElement);

sceneElement.addEventListener('click', () => {
  dice.roll();
});

let lastTimestamp = new Date().getTime();

window.addEventListener('devicemotion', (event) => {
  if (!event.acceleration) {
    console.log(`no acceleration`);
    return;
  }

  const currentTime = new Date().getTime();
  if (currentTime - lastTimestamp < 300) {
    return;
  }

  lastTimestamp = currentTime;

  const acceleration = Math.max(
    Math.abs(event.acceleration.x!),
    Math.abs(event.acceleration.y!),
    Math.abs(event.acceleration.z!)
  );

  if (acceleration >= 4) {
    dice.roll();
  }
});
