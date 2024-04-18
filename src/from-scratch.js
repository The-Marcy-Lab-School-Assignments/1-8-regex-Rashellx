const helloWorldRegex = (str) => {
  return /Hello world/gi.test(str)
};
// console.log(helloWorldRegex("Hello world")); // true
// console.log(helloWorldRegex("Hello world?")); // true
// console.log(helloWorldRegex("Hello world, are you there?")); // true
// console.log(helloWorldRegex("hello world")); // true
// console.log(helloWorldRegex("HELLO WORLD!")); // true
// console.log(helloWorldRegex("HeLlO wOrLd!")); // true
// console.log(helloWorldRegex("Sup world!")) // false
// console.log(helloWorldRegex("Where in the world is Carmen?")); // false
// console.log(helloWorldRegex("Hello")); // false


const hasAVowel = (str) => { };

const hasCatsOrDogs = (str) => {
  return /cats|dogs/gi.test(str)
};

console.log(hasCatsOrDogs("Gosh, I love having so many cats!")); // true
console.log(hasCatsOrDogs("Wow, I have a lot of dogs!")); // true
console.log(hasCatsOrDogs("Cats rule!")); // true
console.log(hasCatsOrDogs(("I do not care for that dog."))); // false
console.log(hasCatsOrDogs(("Cat? No way."))); // false
console.log(hasCatsOrDogs(("Cat? No, but I have a ton of dogs."))); // true

const hasVowelStart = (str) => { };

const hasPunctuationEnd = (str) => {
  return
};

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
