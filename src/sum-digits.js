const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = [...String(n)];
  let summa;

  function sum() {
    summa = arr.reduce((acc, item) => {
      return (acc = acc + Number(item));
    }, 0);
    arr = [...String(summa)];
  }
  sum();

  if (summa && summa >= 10) {
    sum();
  }
  return summa;
}

module.exports = {
  getSumOfDigits,
};
