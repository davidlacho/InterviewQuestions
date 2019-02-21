// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const mapCharsToObject = (str) => {
  const mappedCharacters = {};
  // Use regex to replace spaces and punctuation and lowercase
  str = str.replace(/[^\w]/g, '').toLowerCase();
  for (char of str) {
    mappedCharacters[char] = ++mappedCharacters[char] || 1;
  }
  return mappedCharacters;
}

const anagrams1 = (str1, str2) => {
  const mapped1 = mapCharsToObject(str1);
  const mapped2 = mapCharsToObject(str2);

  if (Object.keys(mapped1).length != Object.keys(mapped2).length) {
    return false;
  }

  for (char in mapped1) {
    if (mapped1[char] !== mapped2[char]) {
      return false;
    }
  }

  return true;
}

const cleanString = (str) => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
const anagrams2 = (str1, str2) => cleanString(str1) === cleanString(str2);

console.log(anagrams1('rail safety', 'fairy tales'));
console.log(anagrams1('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams1('Hi there', 'Bye there'));
console.log(anagrams1('Hello', 'Hellos'));
console.log(anagrams2('rail safety', 'fairy tales'));
console.log(anagrams2('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams2('Hi there', 'Bye there'));
console.log(anagrams2('Hello', 'Hellos'));