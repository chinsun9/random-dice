import getRandom from './utils/getRandom';

const base = 360;

class Dice {
  x: number;

  y: number;

  z: number;

  cubeContainerElement: HTMLDivElement;

  cubeElement: Element;

  sto: ReturnType<typeof setTimeout>;

  constructor(cubeContainerElement: HTMLDivElement) {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.cubeContainerElement = cubeContainerElement;
    this.cubeElement = cubeContainerElement.firstElementChild!;
    this.sto = setTimeout(() => {}, 0);
  }

  initXYZ() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }

  rollDice() {
    clearTimeout(this.sto);
    this.sto = setTimeout(() => {
      this.faceDice();
    }, 1000);
    this.x += getRandom(base * 7, base * 10);
    this.y += getRandom(base, base * 2);
    this.z += getRandom(base, base * 2);

    const { x, y, z } = this;
    this.cubeContainerElement.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
  }

  faceDice() {
    // change number all side
    const randomResult = getRandom(1, 7);

    const array = this.cubeElement?.children!;

    for (let index = 0; index < array.length; index += 1) {
      const element = array[index];
      element.innerHTML = randomResult.toString();
    }
  }

  initDice() {
    this.initXYZ();
    const array = this.cubeElement?.children!;

    for (let index = 0; index < array.length; index += 1) {
      const element = array[index];
      element.innerHTML = (index + 1).toString();
    }

    this.cubeContainerElement.style.transition = 'none';
    setTimeout(() => {
      this.cubeContainerElement.style.transform = `rotateX(${0}deg) rotateY(${0}deg) rotateZ(${0}deg)`;
      this.cubeContainerElement.style.transition = 'all 4s';
      this.cubeContainerElement.style.transitionTimingFunction =
        'transition-timing-function: cubic-bezier(0,.6,0,.98)';
    }, 0);
  }
}

export default Dice;
