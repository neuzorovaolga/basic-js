const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    const arr = members
      .filter((el) => typeof el === "string")
      .map((el) => el.trim());
    const resultArr = [];
    arr.forEach((el) => {
      resultArr.push(el.split("")[0].toUpperCase());
    });
    const result = resultArr.sort();
    return result.join("");
  }
  return false;
}

module.exports = {
  createDreamTeam,
};
