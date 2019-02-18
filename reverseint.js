// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Casting using Number()
const reverseInt = n => Number(Math.abs(n).toString().split('').reduce((a, b) => b + a)) * Math.sign(n);

// Using parseInt
const reverseInt2 = n => parseInt(n.toString().split('').reduce((a, b) => b + a)) * Math.sign(n);

console.log(reverseInt(15));
console.log(reverseInt(981));
console.log(reverseInt(500));
console.log(reverseInt(-15));
console.log(reverseInt(-90));
