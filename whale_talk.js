const input = "wowowoiaejhzuwo";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

for (const index in input) {
  for (const vowelIndex in vowels) {
    if (input[index] === vowels[vowelIndex]) {
      resultArray.push(input[index]);
    }
  }
  if (input[index] === "e") {
    resultArray.push(input[index]);
  } else if (input[index] === "u") {
    resultArray.push(input[index]);
  }
}
const resultString = resultArray.join('').toUpperCase()

console.log(resultString);

//Michael's magic:
console.log(input.split("").filter(letter => vowels.includes(letter)).map(vowel => vowel === 'e' ? 'ee' : vowel === 'u' ? 'uu' : vowel).join('').toUpperCase())