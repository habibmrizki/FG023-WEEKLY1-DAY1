function transformSentence(sentence) {
  const verb = sentence
    .split(" ")
    .sort((a, b) => b.localeCompare(a))
    .map((word) => word.toUpperCase())
    .concat("FAZZTRACK")
    .reverse()
    .join(" ");
  console.log(verb);
}
transformSentence("saya belajar javascript");
