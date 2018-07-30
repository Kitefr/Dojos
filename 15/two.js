function fatFingers(str) {
  return str
    .split(/a/i)
    .map(
      (elt, index) => (index % 2 === 0 ? elt.toLowerCase() : elt.toUpperCase())
    )
    .join("");
}

module.exports = fatFingers;
