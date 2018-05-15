function accum(chaine) {
  return chaine.toUpperCase().replace(/[^a-z]/gi, "").split("").map((letter, index) => letter + letter.repeat(index).toLowerCase()).join("-");
}

module.exports = accum;
