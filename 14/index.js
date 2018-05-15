function minSum(...integers) {
  const arr = [...integers];
  return arr
    .sort((a, b) => a - b)
    .reduce(
      (acc, current, index) =>
        index < arr.length / 2
          ? acc + arr[index] * arr[arr.length - index - 1]
          : acc,
      0
    );
}

module.exports = minSum;
