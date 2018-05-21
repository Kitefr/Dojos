function countPhrase(sentence) {
  let result = {};

  sentence
    .split("")
    .filter(letter => /[^\W_]/i.test(letter))
    .map(letter => {
      if (letter in result) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    });

  const sorted = Object.entries(result).sort((a, b) => {
    return b[1] - a[1];
  });

  result = {};
  sorted.forEach(element => {
    result[element[0]] = element[1];
  });

  return result;
}

module.exports = countPhrase;
