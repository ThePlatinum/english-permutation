import searchValid from './regex.js'

const findPermutations = (string) => {
  if (!string || typeof string !== "string") {
    return 'null'
  }

  if (!!string.length && string.length < 2) return string

  let permutationsArray = []

  for (let i = 0; i < string.length; i++) {
    //Get the letter at position i in the string
    let char = string[i]
    //Double check if the the letter is in that position
    if (string.indexOf(char) != i) continue

    // Romoved the letter immediately after the ith letter
    let remainder = string.slice(0, i) + string.slice(i + 1, string.length)
    for (let permutation of findPermutations(remainder)) {
      //Added the word back and repleated
      permutationsArray.push(char + permutation)
    }
  }
  return permutationsArray
}

const filter = (word) => {
  return searchValid.test(word)
}

const permut = {
  findPermutations, filter
}

export default permut

// import searchValid from './regex.js'

// const findPermutations = (str) => {
//   if (!str || typeof str !== "string") {
//     return 'null'
//   }

//   if (!!str.length && str.length < 2) return str

//   let permutationsArray = new Set()
//   let chars = str.split('')

//   chars.forEach((char, i) => {
//     let remainder = str.slice(0, i) + str.slice(i + 1)
//     findPermutations(remainder).forEach(permutation => {
//       permutationsArray.add(char + permutation)
//     })
//   })

//   return Array.from(permutationsArray)
// }

// const filter = (word) => {
//   return searchValid.exec(word) !== null
// }

// const permut = {
//   findPermutations, filter
// }

// export default permut
