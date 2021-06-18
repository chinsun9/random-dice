import Dice from './dice.js';
var bodyElement = document.body;
var cubeContainerElement = document.querySelector('body > div > div.cubeContainer');
var dice = new Dice(cubeContainerElement);
bodyElement.addEventListener('click', function (event) {
    event.preventDefault();
    dice.initDice();
    dice.rollDice();
});
window.addEventListener('deviceorientation', function (event) {
    var a = document.querySelector('body > div.footer');
    a.innerHTML = JSON.stringify(event);
});
//# sourceMappingURL=index.js.map