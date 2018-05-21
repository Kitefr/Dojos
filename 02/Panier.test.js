const checkout = require("./Panier.js");
const expect = require("chai").expect;

/**
 * All Suite Test
 */
describe("Test Dojo 02", () => {
  let panier = checkout();

  it("should have only 4 french articles", () => {
    const nbFrArticles = panier.articles.filter(
      article => article.code === "fr"
    );
    expect(nbFrArticles.length).to.be.equal(4);
  });

  it("should have an all taxes price of 976.97€", () => {
    expect(panier.prixTTC.toFixed(2)).to.be.equal("976.97");
  });
});
