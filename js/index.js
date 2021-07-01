import Dice from './dice.js';
var sceneElement = document.querySelector('body > div.scene');
var cubeContainerElement = document.querySelector('body > div > div.cubeContainer');
var dice = new Dice(cubeContainerElement);
sceneElement.addEventListener('click', function () {
    dice.roll();
});
var lastTimestamp = new Date().getTime();
window.addEventListener('devicemotion', function (event) {
    if (!event.acceleration) {
        console.log("no acceleration");
        return;
    }
    var currentTime = new Date().getTime();
    if (currentTime - lastTimestamp < 300) {
        return;
    }
    lastTimestamp = currentTime;
    var acceleration = Math.max(Math.abs(event.acceleration.x), Math.abs(event.acceleration.y), Math.abs(event.acceleration.z));
    if (acceleration >= 4) {
        dice.roll();
    }
});
//# sourceMappingURL=index.js.map