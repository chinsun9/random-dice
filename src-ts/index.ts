console.log(`hello random dice`);

function getRandom(min: number, max: number) {
  const newmin = Math.ceil(min);
  const newmax = Math.floor(max);
  return Math.floor(Math.random() * (newmax - newmin)) + min;
}

console.log(getRandom(1, 6));

const bodyElement = document.body;
const cubeContainerElement = document.querySelector<HTMLDivElement>(
  'body > div > div.cubeContainer'
)!;
const cubeElement = cubeContainerElement.firstElementChild;

let x = 0;
let y = 0;
let z = 0;

function initXYZ() {
  x = 0;
  y = 0;
  z = 0;
}

async function rollDice(ms: number) {
  const base = 360;
  x += getRandom(base * 7, base * 10);
  y += getRandom(base, base * 2);
  z += getRandom(base, base * 2);

  cubeContainerElement.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

function faceDice() {
  // change number all side
  const randomResult = getRandom(1, 7);

  const array = cubeElement?.children!;

  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    element.innerHTML = randomResult.toString();
  }
}

function initDice() {
  initXYZ();
  const array = cubeElement?.children!;

  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    element.innerHTML = (index + 1).toString();
  }

  cubeContainerElement.style.transition = 'none';
  setTimeout(() => {
    cubeContainerElement.style.transform = `rotateX(${0}deg) rotateY(${0}deg) rotateZ(${0}deg)`;
    cubeContainerElement.style.transition = 'all 4s';
    cubeContainerElement.style.transitionTimingFunction =
      'transition-timing-function: cubic-bezier(0,.6,0,.98)';
  }, 0);
}

bodyElement.addEventListener('click', async (event) => {
  console.log(event);

  initDice();

  setTimeout(() => {
    faceDice();
  }, 1000);

  await rollDice(7000);
});
