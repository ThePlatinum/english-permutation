# english-permutation
Permutates strings and returns only valid English words

## Install
```
$ npm install english-permutation
```

### How to use
```
const permutate = require('english-permutation')
console.log(permutate.permute('ABS')) 
```
result will be an array:
```
[ 'ABS', 'BAS', 'SAB' ]
```
An empty search will return `null` as a string

_credits: [atebits/words](https://github.com/atebits/Words)._
