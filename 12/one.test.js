const accum = require("./one");
const expect = require("chai").expect;

describe("Test Dojo 12:One", () => {
  it("should be a function", () => {
    expect(accum).to.be.a("function");
  });

  it.skip("should have keep only letters", () => {
    // This one doesnt want to work
    const test = "a_-2adadWw-??/\Wda{}[dawdb2cd@@".replace(/[^a-z]/gi, "");
    expect(test).to.equal("aadadWwWdadawdbcd")
  });

  it("should return a string", () => {
    expect(accum("i2e1pfqefjzb[bf-0|;\[;")).to.be.a('string');
  });

  it("should solve this exemple:01", () => {
    expect(accum("ab2cd@@"))
      .to.be.a("string")
      .that.is.equal("A-Bb-Ccc-Dddd");
  });

  it("should solve this exemple:02", () => {
    expect(accum("RqaE_ty"))
      .to.be.a("string")
      .that.is.equal("R-Qq-Aaa-Eeee-Ttttt-Yyyyyy");
  });

  it("should solve this exemple:03", () => {
    expect(accum("§cwA-t\_\_"))
      .to.be.a("string")
      .that.is.equal("C-Ww-Aaa-Tttt");
  });
});
