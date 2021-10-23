const permut = require('./permut')

permute = (string) =>{
  let result = permut.findPermutations(string)
  let eng = [];
  if (typeof result !== "object") return result
  result.forEach(element => {
    if ( permut.filter(element) ) eng.push(element) 
  })
  return eng
}

module.exports = { permute }