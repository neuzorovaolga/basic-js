const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = [...email];
  const index = arr.lastIndexOf("@");

  arr.splice(0, index + 1);
  return arr.join("");
}

module.exports = {
  getEmailDomain,
};
