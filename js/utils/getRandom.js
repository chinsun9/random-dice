function getRandom(min, max) {
    var newmin = Math.ceil(min);
    var newmax = Math.floor(max);
    return Math.floor(Math.random() * (newmax - newmin)) + min;
}
export default getRandom;
//# sourceMappingURL=getRandom.js.map