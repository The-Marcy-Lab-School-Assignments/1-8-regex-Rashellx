const helloWorldRegex = (str) => {
  return /Hello world/gi.test(str)
};
console.log(helloWorldRegex("Hello world")); // true
console.log(helloWorldRegex("Hello world?")); // true
console.log(helloWorldRegex("Hello world, are you there?")); // true
console.log(helloWorldRegex("hello world")); // true
console.log(helloWorldRegex("HELLO WORLD!")); // true
console.log(helloWorldRegex("HeLlO wOrLd!")); // true
console.log(helloWorldRegex("Sup world!")) // false
console.log(helloWorldRegex("Where in the world is Carmen?")); // false
console.log(helloWorldRegex("Hello")); // false


const hasAVowel = (str) => { };

const hasCatsOrDogs = (str) => { };

const hasVowelStart = (str) => { };

const hasPunctuationEnd = (str) => { };

const hasNothingOrDigits = (str) => { };

const hasNoFlippers = (str) => { };

const isValidEmail = (str) => { };

const isValidPhoneNumber = (str) => { };

const matchAllNumbers = (str) => { };

const matchAllNumbersAsNumbers = (str) => { };

const matchAllWords = (str) => { };

const replaceAllNumbers = (str) => { };

const fixFileName = (str) => { };

const nameRedacter = (str) => { };

const camelToSnakeCase = (str) => { };

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
