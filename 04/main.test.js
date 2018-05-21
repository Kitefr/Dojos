const Palyndrome = require("./main");
const expect = require("chai").expect;

describe("Test Dojo 04", () => {
  it("should be a class", () => {
    expect(new Palyndrome()).to.be.instanceOf(Palyndrome);
  });

  it("should have a method to reverse word", () => {
    expect(new Palyndrome("Kayak").retourne).to.be.a("function");
  });

  it("should have a method to test if palyndrome", () => {
    expect(new Palyndrome("Kayak").estPalyndrome).to.be.a("function");
  });

  it("should solve : Kayak", () => {
    expect(new Palyndrome("Kayak").estPalyndrome()).to.be.true;
  });

  it("should solve : Abba", () => {
    expect(new Palyndrome("Abba").estPalyndrome()).to.be.true;
  });

  it("should solve : Ésope reste ici et se repose", () => {
    expect(new Palyndrome("Ésope reste ici et se repose").estPalyndrome()).to.be
      .true;
  });
});
