const sum = require("./two");
const expect = require("chai").expect;

describe("Test Dojo 12:Two", () => {
  it("should be a function", () => {
    expect(sum).to.be.a("function");
  });

  it("should return a number", () => {
    expect(sum(1)).to.be.a('number');
    expect(sum(2)(6)).to.be.a('number');
    expect(sum(7)(1)(43)).to.be.a('number');
  });

  it("should throw an error if not a number is passed as argument", () => {
    expect(sum('a')).to.throw();
  });

  it("should solve this exemple:01", () => {
    expect(sum(1)).to.be.equal(1);
  });

  it("should solve this exemple:02", () => {
    expect(sum(1)(2)).to.be.equal(3);
  });

  it("should solve this exemple:03", () => {
    expect(sum(2)(5)(7)).to.be.equal(14);
  });
});
