// simple fib without dp
const _fib = (n) => {
  if (n <= 2) return 1;
  return _fib(n - 1) + _fib(n - 2);
};
// console.log(_fib(5));
// console.log(_fib(15));
// console.log(_fib(50));

const fib = (n, memo = {}) => {
  if (n <= 2) return 1;
  if (n in memo) return memo[n];
  else {
    return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
  }
};
console.log(fib(5));
console.log(fib(15));
console.log(fib(50));
