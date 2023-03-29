function splitToWords(sentence) {
  const arrayOfWords = sentence
    .replace(/[-!.,]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((element) => element.toLowerCase());
  return arrayOfWords;
}

function hasWhiteSpace(sentence) {
  return /\s/g.test(sentence);
}

let phrase =
  "                  JS  -     is,    a      programming.      language!";
console.log(splitToWords(phrase));
console.log(hasWhiteSpace(phrase));

const str = "zero?one.two_three-four";
const newStr = str.replace(/[-._?]/g, "");
console.log("string: ", newStr);
