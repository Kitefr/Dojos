const { stripComments } = require("./index");
const expect = require("chai").expect;

describe("Strip Comment", () => {
  it("should be a function", () => {
    expect(stripComments).to.be.a("function");
  });

  it("should solve 'apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!'] => 'apples, pears\ngrapes\nbananas'", () => {
    expect(
      stripComments("apples, pears # and bananas\ngrapes\nbananas !apples", [
        "#",
        "!"
      ])
    ).to.equal("apples, pears\ngrapes\nbananas");
  });
});
