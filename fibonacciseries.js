/**
 * A series of numbers in which each number (Fibonacci number) is the sum of the two preceding numbers. The simplest in the series is the series 1, 1, 2, 3, 5, 8, etc. *
 */

 const fib = (n) => {
   if (n < 2) return n;
   return fib(n - 1) + fib(n - 2);
 }