function* permuteAndCombine(str) {
  yield str;
  const array = [...str];

  array.map(() => {
    const [first, ...rest] = array;
    rest.map(() => {
      rest.unshift(rest.pop());
      const value = [first, ...rest].join("");
      yield value;
    });
    array.unshift(rest.pop());
  });

  yield ["a"];
}

function pangram() {}
function mexicanWave() {}
function timeAgo() {}

module.exports = { permuteAndCombine, pangram, mexicanWave, timeAgo };
