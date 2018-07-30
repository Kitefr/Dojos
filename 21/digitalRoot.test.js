const { digitalRoot } = require("./index");
const expect = require("chai").expect;

describe("Digital Root", () => {
  it("should be a function", () => {
    expect(digitalRoot).to.be.a("function");
  });

  it("should solve 16 => 7", () => {
    expect(digitalRoot(16)).to.equal(7);
  });

  it("should solve 942 => 6", () => {
    expect(digitalRoot(942)).to.equal(6);
  });

  it("should solve 132189 => 6", () => {
    expect(digitalRoot(132189)).to.equal(6);
  });

  it("should solve 493193 => 2", () => {
    expect(digitalRoot(493193)).to.equal(2);
  });
});
