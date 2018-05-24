const freddy = require("./two");
const expect = require("chai").expect;

describe("Test Dojo 15:02", () => {
  it("should be a function", () => {
    expect(freddy).to.be.a("function");
  });

  it("should solve exemple 1", () => {
    expect(freddy("The quick brown fox jumps over the lazy dog."))
      .to.be.a("string")
      .that.is.equal("The quick brown fox jumps over the lZY DOG.");
  });

  it("should solve exemple 2", () => {
    const text =
      "The end of the institution, maintenance, and administration of government, is to secure the existence of the body politic, to protect it, and to furnish the individuals who compose it with the power of enjoying in safety and tranquillity their natural rights, and the blessings of life: and whenever these great objects are not obtained, the people have a right to alter the government, and to take measures necessary for their safety, prosperity and happiness.";
    expect(freddy(text))
      .to.be.a("string")
      .that.is.equal(
        "The end of the institution, mINTENnce, ND dministrTION OF GOVERNMENT, IS TO SECURE THE EXISTENCE OF THE BODY POLITIC, TO PROTECT IT, nd to furnish the individuLS WHO COMPOSE IT WITH THE POWER OF ENJOYING IN Sfety ND TRnquillity their nTURl rights, ND THE BLESSINGS OF LIFE: nd whenever these greT OBJECTS re not obtINED, THE PEOPLE Hve  RIGHT TO lter the government, ND TO Tke meSURES NECESSry for their sFETY, PROSPERITY nd hPPINESS."
      );
  });

  it("should solve exemple 3", () => {
    expect(freddy("aAaaaaAaaaAAaAa"))
      .to.be.a("string")
      .that.is.equal("");
  });
});
