const { makeLooper } = require("./index");
const expect = require("chai").expect;

describe("Make Looper", () => {
  it("should be a function", () => {
    expect(makeLooper).to.be.a("function");
  });
});
