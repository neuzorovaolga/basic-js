const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const additionalArray = Array(options.additionRepeatTimes).fill(
    options.addition !== undefined ? `${options.addition}` : ""
  );
  const addition = additionalArray.join(options.additionSeparator || "|");
  const resultArray = Array(options.repeatTimes)
    .fill(str)
    .map((item) => `${item}${addition}`);
  const result = resultArray.join(options.separator || "+");
  return result;
}

module.exports = {
  repeater,
};
