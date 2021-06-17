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

async function rollDice() {
  x += getRandom(100, 360);
  y += getRandom(100, 360);
  z += getRandom(100, 360);

  cubeContainerElement.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 300);
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
  const array = cubeElement?.children!;

  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    element.innerHTML = (index + 1).toString();
  }
}

bodyElement.addEventListener('click', async (event) => {
  console.log(event);

  initDice();

  for (let index = 0; index < 2; index += 1) {
    // eslint-disable-next-line no-await-in-loop
    await rollDice();
  }
  cubeContainerElement.style.transform = `rotateX(${getRandom(
    0,
    10
  )}deg) rotateY(${getRandom(0, 10)}deg) rotateZ(${getRandom(0, 10)}deg)`;
  faceDice();
});
