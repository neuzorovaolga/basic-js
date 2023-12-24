const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  resultArray: [],
  getLength() {
    return resultArray.length;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    this.resultArray.push(value);
    return this;
  },
  removeLink(position) {
    if (
      position <= 0 ||
      position > this.resultArray.length ||
      typeof position !== "number"
    ) {
      this.resultArray = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.resultArray.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.resultArray = this.resultArray.reverse();
    return this;
  },
  finishChain() {
    const result = this.resultArray.map((item) => `( ${item} )`).join("~~");
    this.resultArray = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
