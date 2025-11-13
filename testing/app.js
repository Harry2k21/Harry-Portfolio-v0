function isEven(num) {
  if (typeof num !== 'number') throw new Error('Not a number');
  return num % 2 === 0;
}
module.exports = isEven;