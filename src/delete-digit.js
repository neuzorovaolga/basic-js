const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [...String(n)];
  let copyArr = [...String(n)];
  const resultArr = [];
  let i;
  for (i = 0; i < arr.length; i++) {
    copyArr.splice(i, 1);
    resultArr.push(+copyArr.join(""));
    copyArr = [...arr];
  }
  return Math.max(...resultArr);
}

module.exports = {
  deleteDigit,
};
