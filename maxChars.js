// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Using an Object:
const maxChar = (str) => {
  const charMap = {};

  for (let char of str) {
    charMap[char] = ++charMap[char] || 1;
  }

  let longestChar = str[0];

  for (let char in charMap) {
    if (charMap[char] > charMap[longestChar]) {
      longestChar = char;
    }
  }

  return longestChar;
}

console.log(maxChar('abcccccccd'));
console.log(maxChar('apple 1231111'));