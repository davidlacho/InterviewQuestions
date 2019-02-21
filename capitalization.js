// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = str => {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}
// Complicated using reduce:
const capitalize2 = str => str.split('').reduce((a, b, i, arr) => i === 0 || arr[i - 1] === ' ' ? a + b.toUpperCase() : a + b, '');

// Looping
const capitalize3 = str => {
  let newStr = '';
  let previousChar = '';
  
  for (char of str) {
    if (!previousChar || previousChar === ' ') {
      newStr += char.toUpperCase();
    } else {
      newStr += (char);
    }
    previousChar = char;
  }

  return newStr;
}


console.log(capitalize('a short sentence'));
console.log(capitalize('a lazy fox'));
console.log(capitalize('look, it is working!'));