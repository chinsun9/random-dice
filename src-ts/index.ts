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

bodyElement.addEventListener('click', (event) => {
  console.log(event);

  const xrand = getRandom(0, 360);
  const yrand = getRandom(0, 360);
  const zrand = getRandom(0, 360);

  cubeContainerElement.style.transform = `rotateX(${xrand}deg) rotateY(${yrand}deg) rotateZ(${zrand}deg)`;
});
