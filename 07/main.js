/**
 * Take a sentence to return a Verlan language
 * @param {String} phrase
 */
function verlan(phrase) {
  const voyelles = ["a", "e", "i", "o", "u", "y"];
  const words = phrase
    .split(" ")
    .map(word => {
      const wordLetters = word.split("");
      if (
        word.length >= 6 &&
        wordLetters.filter(letter => !voyelles.includes(letter)).length > 1
      ) {
        let coupure = Math.floor(word.length / 2);
        if (voyelles.includes(wordLetters[coupure])) {
          coupure--;
        }

        const newWord = [
          ...wordLetters.slice(coupure),
          ...wordLetters.slice(0, coupure)
        ];
        return newWord.join("");
      }
      return word;
    })
    .join(" ");
}

verlan("Les maisons près de la fontaine dans le quartier");
