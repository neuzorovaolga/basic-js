const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  matrix.forEach((el1, index1) => {
    el1.forEach((el2, index2) => {
      let value = index1 + 1;
      if (el2 === 0 && matrix[value]) {
        matrix[value][index2] = 0;
      }
    });
  });
  return matrix.flat().reduce((acc, item) => acc + item);
}

module.exports = {
  getMatrixElementsSum,
};
