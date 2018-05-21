const countPhrase = require("./main.js");
const expect = require("chai").expect;

describe("Test Dojo 03", () => {
  it("should return an object", () => {
    expect(countPhrase("I am Javascript.")).to.be.a("object");
  });

  it("should solve this: I am Javascript.", () => {
    expect(countPhrase("I am Javascript.")).to.deep.equal({
      a: 3,
      I: 2,
      L: 1,
      o: 1,
      v: 1,
      e: 1,
      J: 1,
      v: 1,
      s: 1,
      p: 1,
      t: 1
    });
  });
});
