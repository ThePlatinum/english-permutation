import permut from "./permut.js"

const permute = (string) => {
  return new Promise((resolve) => {
    let result = permut.findPermutations(string)

    let eng = [];
    if (typeof result !== "object") return resolve(result)

    result.forEach(element => {
      if (permut.filter(element)) eng.push(element)
    });

    return resolve(eng);
  });
}

export default permute;
