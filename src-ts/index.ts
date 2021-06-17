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

async function rollDice() {
  const xrand = getRandom(0, 360);
  const zrand = getRandom(0, 360);
  const yrand = getRandom(0, 360);

  cubeContainerElement.style.transform = `rotateX(${xrand}deg) rotateY(${yrand}deg) rotateZ(${zrand}deg)`;
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

  for (let index = 0; index < 5; index += 1) {
    // eslint-disable-next-line no-await-in-loop
    await rollDice();
  }
  faceDice();
  rollDice();
});
