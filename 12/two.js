const x = (x) => {
  if (isNan(x))
    throw new Error("it sould be a number")
  return x;
}

const sum = x => y => z => z + y + x;

module.exports = sum;