/**
 * Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz" *
 */
const fizzbuzz = (num) => {
  let returnFizzbuzz = '';
  if (num % 3 === 0) {
    returnFizzbuzz += 'Fizz';
  }
  if (num % 5 === 0) {
    returnFizzbuzz += 'Buzz';
  }
  if (returnFizzbuzz) {
    return returnFizzbuzz;
  }
  return num;
};

for (let i = 0; i <= 100; i++) {
  console.log(fizzbuzz(i));
}
