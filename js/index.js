"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
console.log("hello random dice");
function getRandom(min, max) {
    var newmin = Math.ceil(min);
    var newmax = Math.floor(max);
    return Math.floor(Math.random() * (newmax - newmin)) + min;
}
console.log(getRandom(1, 6));
var bodyElement = document.body;
var cubeContainerElement = document.querySelector('body > div > div.cubeContainer');
var cubeElement = cubeContainerElement.firstElementChild;
var x = 0;
var y = 0;
var z = 0;
function initXYZ() {
    x = 0;
    y = 0;
    z = 0;
}
function rollDice(ms) {
    return __awaiter(this, void 0, void 0, function () {
        var base;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    base = 360;
                    x += getRandom(base * 7, base * 10);
                    y += getRandom(base, base * 2);
                    z += getRandom(base, base * 2);
                    cubeContainerElement.style.transform = "rotateX(" + x + "deg) rotateY(" + y + "deg) rotateZ(" + z + "deg)";
                    return [4 /*yield*/, new Promise(function (resolve) {
                            setTimeout(function () {
                                resolve(ms);
                            }, ms);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function faceDice() {
    // change number all side
    var randomResult = getRandom(1, 7);
    var array = cubeElement === null || cubeElement === void 0 ? void 0 : cubeElement.children;
    for (var index = 0; index < array.length; index += 1) {
        var element = array[index];
        element.innerHTML = randomResult.toString();
    }
}
function initDice() {
    initXYZ();
    var array = cubeElement === null || cubeElement === void 0 ? void 0 : cubeElement.children;
    for (var index = 0; index < array.length; index += 1) {
        var element = array[index];
        element.innerHTML = (index + 1).toString();
    }
    cubeContainerElement.style.transition = 'none';
    setTimeout(function () {
        cubeContainerElement.style.transform = "rotateX(" + 0 + "deg) rotateY(" + 0 + "deg) rotateZ(" + 0 + "deg)";
        cubeContainerElement.style.transition = 'all 4s';
        cubeContainerElement.style.transitionTimingFunction =
            'transition-timing-function: cubic-bezier(0,.6,0,.98)';
    }, 0);
}
bodyElement.addEventListener('click', function (event) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(event);
                initDice();
                setTimeout(function () {
                    faceDice();
                }, 1000);
                return [4 /*yield*/, rollDice(7000)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=index.js.map