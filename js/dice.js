import getRandom from './utils/getRandom.js';
var base = 360;
var Dice = /** @class */ (function () {
    function Dice(cubeContainerElement) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.cubeContainerElement = cubeContainerElement;
        this.cubeElement = cubeContainerElement.firstElementChild;
        this.sto = setTimeout(function () { }, 0);
    }
    Dice.prototype.initXYZ = function () {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    };
    Dice.prototype.rollDice = function () {
        var _this = this;
        clearTimeout(this.sto);
        this.sto = setTimeout(function () {
            _this.faceDice();
        }, 1000);
        this.x += getRandom(base * 7, base * 10);
        this.y += getRandom(base, base * 2);
        this.z += getRandom(base, base * 2);
        var _a = this, x = _a.x, y = _a.y, z = _a.z;
        this.cubeContainerElement.style.transform = "rotateX(" + x + "deg) rotateY(" + y + "deg) rotateZ(" + z + "deg)";
    };
    Dice.prototype.faceDice = function () {
        var _a;
        // change number all side
        var randomResult = getRandom(1, 7);
        var array = (_a = this.cubeElement) === null || _a === void 0 ? void 0 : _a.children;
        for (var index = 0; index < array.length; index += 1) {
            var element = array[index];
            element.innerHTML = randomResult.toString();
        }
    };
    Dice.prototype.initDice = function () {
        var _this = this;
        var _a;
        this.initXYZ();
        var array = (_a = this.cubeElement) === null || _a === void 0 ? void 0 : _a.children;
        for (var index = 0; index < array.length; index += 1) {
            var element = array[index];
            element.innerHTML = (index + 1).toString();
        }
        this.cubeContainerElement.style.transition = 'none';
        setTimeout(function () {
            _this.cubeContainerElement.style.transform = "rotateX(" + 0 + "deg) rotateY(" + 0 + "deg) rotateZ(" + 0 + "deg)";
            _this.cubeContainerElement.style.transition = 'all 4s';
            _this.cubeContainerElement.style.transitionTimingFunction =
                'transition-timing-function: cubic-bezier(0,.6,0,.98)';
        }, 0);
    };
    return Dice;
}());
export default Dice;
//# sourceMappingURL=dice.js.map