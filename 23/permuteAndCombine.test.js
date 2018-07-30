const { permuteAndCombine } = require("./index");
const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-generator"));

describe("Test Permute and combine", () => {
  it("should be a function", () => {
    expect(permuteAndCombine).to.be.a("function");
  });

  it("should should yield a result", () => {
    expect(permuteAndCombine()).to.yield();
  });

  it("should solve 'a'", () => {
    expect(permuteAndCombine("a")).to.deep.yield(["a"]);
  });

  it("should solve 'ab'", () => {
    expect(permuteAndCombine("ab")).to.deep.yield(["ab", "ba"]);
  });

  it("should solve 'aabb'", () => {
    expect(permuteAndCombine("aabb")).to.deep.yield([
      "aabb",
      "abab",
      "abba",
      "baab",
      "baba",
      "bbaa"
    ]);
  });
});
