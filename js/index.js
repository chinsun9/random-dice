import Dice from './dice.js';
var bodyElement = document.body;
var cubeContainerElement = document.querySelector('body > div > div.cubeContainer');
var dice = new Dice(cubeContainerElement);
bodyElement.addEventListener('click', function (event) {
    event.preventDefault();
    dice.initDice();
    dice.rollDice();
});
var lastTimestamp = new Date().getTime();
var speedX = 0;
var speedY = 0;
var speedZ = 0;
window.addEventListener('devicemotion', function (event) {
    var a = document.querySelector('body > div.footer');
    var currentTime = new Date().getTime();
    if (lastTimestamp === undefined) {
        lastTimestamp = new Date().getTime();
        return; // ignore first call, we need a reference time
    }
    //  m/s² / 1000 * (miliseconds - miliseconds)/1000 /3600 => km/h (if I didn't made a mistake)
    if (!event.acceleration)
        return;
    speedX +=
        ((event.acceleration.x / 1000) * ((currentTime - lastTimestamp) / 1000)) /
            3600;
    speedY +=
        ((event.acceleration.y / 1000) * ((currentTime - lastTimestamp) / 1000)) /
            3600;
    speedZ +=
        ((event.acceleration.z / 1000) * ((currentTime - lastTimestamp) / 1000)) /
            3600;
    lastTimestamp = currentTime;
    a.innerHTML = JSON.stringify([speedX, speedY, speedZ]);
});
//# sourceMappingURL=index.js.map