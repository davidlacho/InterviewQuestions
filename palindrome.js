/**
 * Given a string, return true if the string is a palindrome or false if it is not.  
 * Palindromes are strings that form the same word if it is reversed. 
 * *Do* include spaces and punctuation in determining if the string is a palindrome.
 */

// Using a for loop
const palindrome = str => {
  for (i = 0; i <= str.length - 1; i++) {
    if (str[i] != str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// using array.reverse() 
const palindrome2 = str => str.split('').reverse().join('') === str;

// using array.every();
const palindrome3 = str => str.split('').every((char, i) => char === str[str.length - 1 - i]);

// using array.reduce()
const palindrome4 = str => str.split('').reduce((a, b) => b + a) === str;

console.log('Solution 1: Is tattarrattat a palindrome?', palindrome('tattarrattat'));
console.log('Solution 1: Is asdklaskco a palindrome?', palindrome('asdklaskco'));
console.log('Solution 2: Is hanah a palindrome?', palindrome2('hanah'));
console.log('Solution 2: Is cool a palindrome?', palindrome2('cool'));
console.log('Solution 3: Is tattarrattat a palindrome?', palindrome3('tattarrattat'));
console.log('Solution 3: Is asdklaskco a palindrome?', palindrome3('asdklaskco'));
console.log('Solution 4: Is hanah a palindrome?', palindrome4('hanah'));
console.log('Solution 4: Is cool a palindrome?', palindrome4('cool'));