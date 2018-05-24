const highestRank = require("./one");
const expect = require("chai").expect;

describe("Test Dojo 15:01", () => {
  it("should be a function", () => {
    expect(highestRank).to.be.a("function");
  });

  it("should solve this exemple:[12, 10, 8, 12, 7, 6, 4, 10, 12]", () => {
    expect(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))
      .to.be.a("number")
      .that.is.equal(12);
  });

  it("should solve this exemple:[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]", () => {
    expect(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]))
      .to.be.a("number")
      .that.is.equal(12);
  });

  it("should solve this exemple:[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]", () => {
    expect(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]))
      .to.be.a("number")
      .that.is.equal(3);
  });
});
