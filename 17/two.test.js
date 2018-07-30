const josephus_survivor = require("./two");
const expect = require("chai").expect;

describe("Test Dojo 17:2", () => {
  it("should be a function", () => {
    expect(josephus_survivor).to.be.a("function");
  });

  it("should solve this exemple: 7 and 3 => 4", () => {
    expect(josephus_survivor(7, 3))
      .to.be.a("number")
      .that.is.equal(4);
  });
});
