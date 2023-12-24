const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultArray = [];

  const checkMines = (array, arrayIndex, index) => {
    let returnValue = 0;
    if (array[arrayIndex - 1] && array[arrayIndex - 1][index - 1]) {
      const mainValue = array[arrayIndex - 1][index - 1];
      returnValue = mainValue ? returnValue + 1 : returnValue;
    }
    if (array[arrayIndex - 1] && array[arrayIndex - 1][index]) {
      const mainValue = array[arrayIndex - 1][index];
      returnValue = mainValue ? returnValue + 1 : returnValue;
    }
    if (array[arrayIndex - 1] && array[arrayIndex - 1][index + 1]) {
      const mainValue = array[arrayIndex - 1][index + 1];
      returnValue = mainValue ? returnValue + 1 : returnValue;
    }
    if (array[arrayIndex] && array[arrayIndex][index + 1]) {
      const mainValue = array[arrayIndex][index + 1];
      returnValue = mainValue ? returnValue + 1 : returnValue;
    }
    if (array[arrayIndex + 1] && array[arrayIndex + 1][index + 1]) {
      const mainValue = array[arrayIndex + 1][index + 1];
      returnValue = mainValue ? returnValue + 1 : returnValue;
    }
    if (array[arrayIndex + 1] && array[arrayIndex + 1][index]) {
      const mainValue = array[arrayIndex + 1][index];
      returnValue = mainValue ? returnValue + 1 : returnValue;
    }
    if (array[arrayIndex + 1] && array[arrayIndex + 1][index - 1]) {
      const mainValue = array[arrayIndex + 1][index - 1];
      returnValue = mainValue ? returnValue + 1 : returnValue;
    }
    if (array[arrayIndex] && array[arrayIndex][index - 1]) {
      const mainValue = array[arrayIndex][index - 1];
      returnValue = mainValue ? returnValue + 1 : returnValue;
    }

    return returnValue;
  };

  matrix.forEach((array, arrayIndex) => {
    const lineArray = array.map((item, index) =>
      checkMines(matrix, arrayIndex, index)
    );
    resultArray.push(lineArray);
  });
  return resultArray;
}

module.exports = {
  minesweeper,
};
