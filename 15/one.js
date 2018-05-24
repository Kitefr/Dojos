function highestRank(arr) {
  const counter = arr.reduce((acc, current) => {
    acc[current] = ++acc[current] || 1;
    return acc;
  }, {});
  return Math.max(
    ...[...Object.entries(counter)]
      .filter(elt => elt[1] === Math.max(...Object.values(counter)))
      .reduce((acc, current) => {
        acc.push(current[0]);
        return acc;
      }, [])
  );
}

module.exports = highestRank;
