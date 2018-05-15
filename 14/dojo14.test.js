const minSum = require("./index");
const expect = require("chai").expect;

describe("Test Dojo 14", () => {
  it("should be a function", () => {
    expect(minSum).to.be.a("function");
  });

  it("should return a number", () => {
    expect(minSum(2, 45, 46, 22, 1)).to.be.a("number");
  });

  it("should solve this exemple:(5, 4, 2, 3)", () => {
    expect(minSum(5, 4, 2, 3))
      .to.be.a("number")
      .that.is.equal(22);
  });

  it("should solve this exemple:(12, 6, 10, 26, 3, 24)", () => {
    expect(minSum(12, 6, 10, 26, 3, 24))
      .to.be.a("number")
      .that.is.equal(342);
  });
});
