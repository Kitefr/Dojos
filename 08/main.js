function hamming(phraseOne, phraseTwo) {
  if (typeof phraseOne !== "string" || typeof phraseTwo !== "string") {
    throw new Error(
      "Les deux arguments doivent être des chaînes de caractères."
    );
  }

  const pattern = /\s/gi;
  const phraseOneLetters = phraseOne
    .replace(pattern, "")
    .toLowerCase()
    .split("");
  const phraseTwoLetters = phraseTwo
    .replace(pattern, "")
    .toLowerCase()
    .split("");

  if (phraseOneLetters.length != phraseTwoLetters.length) {
    return -1;
  }

  return (count = phraseOneLetters.reduce(
    (acc, letter, index) => (letter !== phraseTwoLetters[index] ? acc++ : acc),
    0
  ));
}

try {
  hamming("Je suis une phrase", "Je suis une phrase");
} catch (err) {
  console.log(`${err.name} : ${err.message}`);
}
