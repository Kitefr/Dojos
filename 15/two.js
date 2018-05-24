function freddy(text) {
  return text
    .split(/a/i)
    .map((elt, index) => (index % 2 === 0 ? elt : elt.toUpperCase()))
    .join("");
}

module.exports = freddy;
