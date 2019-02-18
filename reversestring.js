// Using for loop
const reverse = str => {
  let reversed = '';
  for (i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}

// Using for ... of
const reverse2 = str => {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

// Using array.reverse()
const reverse3 = str => str.split('').reverse().join('');

// Using array.reduce();
const reverse4 = str => str.split('').reduce((a, b) => b + a);

console.log(reverse('!pool rof a gnisu desrever si sihT'));
console.log(reverse2('!pool fo ... rof a gnisu desrever si sihT'));
console.log(reverse3('!\)\(esrever.yarra gnisu desrever si sihT'));
console.log(reverse4('\)\(ecuder.yarra gnisu desrever si sihT'));