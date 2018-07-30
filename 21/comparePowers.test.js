const { comparePowers } = require("./index");
const expect = require("chai").expect;

describe("Compare Power", () => {
  it("should be a function", () => {
    expect(comparePowers).to.be.a("function");
  });

  it("should solve [2,10],[2,15] => 1", () => {
    expect(comparePowers([2, 10], [2, 15])).to.equal(1);
  });

  it("should solve [2,10],[3,10] => 1", () => {
    expect(comparePowers([2, 10], [3, 10])).to.equal(1);
  });

  it("should solve [2,10],[2,10] => 0", () => {
    expect(comparePowers([2, 10], [2, 10])).to.equal(0);
  });

  it("should solve [3,9],[5,6] => 1-", () => {
    expect(comparePowers([3, 9], [5, 6])).to.equal(-1);
  });

  it("should solve [7,7],[5,8] => -1", () => {
    expect(comparePowers([7, 7], [5, 8])).to.equal(-1);
  });
});
