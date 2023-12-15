const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arrDomains = domains.map((el) => el.split(".").reverse());
  console.log(arrDomains);
  const result = arrDomains.reduce((acc, el) => {
    let string = "";
    el.forEach((element) => {
      string = string + `.${element}`;
      if (acc[string]) {
        acc[string] = acc[string] + 1;
      } else {
        acc[string] = 1;
      }
    });
    return acc;
  }, {});
  return result;
}

module.exports = {
  getDNSStats,
};
