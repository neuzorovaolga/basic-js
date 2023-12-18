const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const copyArr = [...arr];
  const result = [];

  arr.sort((a, b) => {
    return a - b;
  });
  const arrFilter = arr.filter((el) => el !== -1);
  copyArr.forEach((el) => {
    if (el === -1) {
      result.push(el);
    }
    if (el !== -1) {
      result.push(arrFilter.shift());
    }
  });
  return result;
}

module.exports = {
  sortByHeight,
};
