function getRandom(min: number, max: number) {
  const newmin = Math.ceil(min);
  const newmax = Math.floor(max);
  return Math.floor(Math.random() * (newmax - newmin)) + min;
}

export default getRandom;
