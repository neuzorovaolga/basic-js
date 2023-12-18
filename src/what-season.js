const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  if (!date) {
    return "Unable to determine the time of year!";
  }
  const valid = () => {
    try {
      date?.valueOf();
    } catch (error) {
      throw new Error("Invalid date!");
    }
    return date instanceof Date && !isNaN(date);
  };

  if (valid()) {
    const month = date.getMonth();
    if ((month >= 0 && month <= 1) || month === 11) {
      return "winter";
    }
    if (month >= 2 && month <= 4) {
      return "spring";
    }
    if (month >= 5 && month <= 7) {
      return "summer";
    }
    if (month >= 8 && month <= 10) {
      return "autumn";
    }
  } else {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
