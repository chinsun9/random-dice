import getRandom from './utils/getRandom';

const base = 360;

class Dice {
  x: number;

  y: number;

  z: number;

  cubeContainerElement: HTMLDivElement;

  cubeElement: Element;

  sto: ReturnType<typeof setTimeout>;

  isRolling: boolean;

  constructor(cubeContainerElement: HTMLDivElement) {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.cubeContainerElement = cubeContainerElement;
    this.cubeElement = cubeContainerElement.firstElementChild!;
    this.sto = setTimeout(() => {}, 0);
    this.isRolling = false;
  }

  rollDice() {
    clearTimeout(this.sto);
    this.sto = setTimeout(() => {
      this.faceDice();
    }, 300);
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

    this.isRolling = false;
  }

  initDice() {
    const array = this.cubeElement?.children!;

    for (let index = 0; index < array.length; index += 1) {
      const element = array[index];
      element.innerHTML = (index + 1).toString();
    }
  }

  async roll() {
    if (this.isRolling) {
      console.log(`already rolling`);
      return;
    }

    this.isRolling = true;

    this.initDice();
    this.rollDice();
  }
}

export default Dice;
