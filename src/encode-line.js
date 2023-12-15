const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split("");
  let result = "";
  let later = "";
  let count = 1;
  arr.forEach((el, index) => {
    if (later && later !== el) {
      result = `${result}${count === 1 ? "" : count}${later}`;
      count = 1;
      later = el;
    } else if (later && later === el) {
      count += 1;
    }

    if (!later) {
      count = 1;
      later = el;
    }

    if (arr.length - 1 == index) {
      result = `${result}${count === 1 ? "" : count}${later}`;
    }
  });
  return result;
}

module.exports = {
  encodeLine,
};
