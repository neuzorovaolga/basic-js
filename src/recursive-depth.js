const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  maxValue = 1;

  calculateDepth(arr, count) {
    if (!count) {
      count = 1;
      this.maxValue = 1;
    }

    for (let i = 0; i <= arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.calculateDepth(arr[i], count + 1);
      } else {
        if (count > this.maxValue) {
          this.maxValue = count;
        }
      }
    }

    return this.maxValue;
  }
}

module.exports = {
  DepthCalculator,
};
