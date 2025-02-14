function transformSentence(sentence) {
  const verb = sentence
    .split(" ")
    .concat("FAZZTRACK")
    .sort()
    .join(" ")
    .toUpperCase();
  console.log(verb);
}
transformSentence("saya belajar javascript");
