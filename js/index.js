import Dice from './dice.js';
var bodyElement = document.body;
var cubeContainerElement = document.querySelector('body > div > div.cubeContainer');
var dice = new Dice(cubeContainerElement);
bodyElement.addEventListener('click', function (event) {
    event.preventDefault();
    dice.roll();
});
var lastTimestamp = new Date().getTime();
window.addEventListener('devicemotion', function (event) {
    event.preventDefault();
    if (!event.acceleration) {
        console.log("no acceleration");
        return;
    }
    var currentTime = new Date().getTime();
    if (currentTime - lastTimestamp < 300) {
        return;
    }
    lastTimestamp = currentTime;
    var isActive = Math.max(Math.abs(event.acceleration.x), Math.abs(event.acceleration.y), Math.abs(event.acceleration.z));
    if (isActive >= 4) {
        console.log("run");
        event.preventDefault();
        dice.roll();
    }
});
//# sourceMappingURL=index.js.map