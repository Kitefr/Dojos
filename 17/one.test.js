const timeMath = require("./one");
const expect = require("chai").expect;

describe("Test Dojo 17:1", () => {
  it("should be a function", () => {
    expect(timeMath).to.be.a("function");
  });

  it("should solve this exemple: 01:24:31 + 02:16:05", () => {
    expect(timeMath("01:24:31", "+", "02:16:05"))
      .to.be.a("string")
      .that.is.equal("03:40:36");
  });

  it("should solve this exemple: 01:24:31 - 02:16:05", () => {
    expect(timeMath("01:24:31", "-", "02:31:41"))
      .to.be.a("string")
      .that.is.equal("22:52:50");
  });
});
