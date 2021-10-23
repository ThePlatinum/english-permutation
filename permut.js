let findPermutations = (string) => {
  if (!string || typeof string !== "string") {
    return 'null'
  }
  if (!!string.length && string.length < 2) {
    return string
  }
  let permutationsArray = []

    for (let i = 0; i < string.length; i++) {
      //Get the letter at position i in the string
      let char = string[i]
      //Double check if the the letter is in that position
      if (string.indexOf(char) != i) {
        continue
      }
      // Romoved the letter immediately after the ith letter
      let remainder = string.slice(0, i) + string.slice(i + 1, string.length)
      for (let permutation of findPermutations(remainder)) {
        //Added the word back and repleated
        permutationsArray.push(char + permutation)

      }
    }
  return permutationsArray
}

let filter = (word) => {

  const searchValid = require(`./regex.js`);

  return searchValid.test(word)
}

module.exports = {findPermutations, filter};
