const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  const discardNext = "--discard-next";
  const discardPrev = "--discard-prev";
  const doubleNext = "--double-next";
  const doublePrev = "--double-prev";
  const result = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === doubleNext) {
      arr[index + 1] && result.push(arr[index + 1]);
    } else if (arr[index] === doublePrev) {
      arr[index - 1] &&
        arr[index - 1] === result[result.length - 1] &&
        result.push(arr[index - 1]);
    } else if (arr[index] === discardPrev) {
      arr[index - 1] === result[result.length - 1] && result.pop();
    } else if (arr[index] === discardNext) {
      index++;
    } else {
      if (Array.isArray(arr[index])) {
        result.push(transform(arr[index]));
      } else {
        result.push(arr[index]);
      }
    }
  }
  return result;
}

module.exports = {
  transform,
};
