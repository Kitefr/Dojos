const { searchSubstr } = require("./index");
const expect = require("chai").expect;

describe("Search Substr", () => {
  it("should be a function", () => {
    expect(searchSubstr).to.be.a("function");
  });

  it("should solve 'aa_bb_cc_dd_bb_e', 'bb' => 2", () => {
    expect(searchSubstr("aaabbbcccc", "bbb")).to.equal(2);
  });

  it("should solve 'aaabbbcccc', 'bbb' => 1", () => {
    expect(searchSubstr("aaabbbcccc", "bbb")).to.equal(1);
  });

  it("should solve 'aaa', 'aa' => 2", () => {
    expect(searchSubstr("aaa", "aa")).to.equal(2);
  });

  it("should solve 'aaa', '' => 0", () => {
    expect(searchSubstr("aaa", "")).to.equal(0);
  });

  it("should solve 'aaa', 'aa', false => 1", () => {
    expect(searchSubstr("aaa", "aa", false)).to.equal(1);
  });
});
