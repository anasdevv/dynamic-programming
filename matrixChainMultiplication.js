const { MAX_UNSIGNED_VALUE } = require('long');

const matrixChainMultiplication = (dims, memo = new Map()) => {
  if (dims.length <= 2) {
    return 0;
  }
  if (memo.has(dims)) {
    return memo.get(dims);
  }
  let minCost = MAX_UNSIGNED_VALUE;
  for (let i = 1; i < dims.length; i++) {
    let cost =
      matrixChainMultiplication(dims.slice(0, i)) +
      matrixChainMultiplication(dims.slice(i)) +
      dims[0] * dims[i] * dims[dims.length - 1];
    if (cost < minCost) {
      minCost = cost;
      memo.set(dims, minCost);
    }
  }
  return memo.get(dims);
};
30, 35, 15, 5, 10, 20, 25;
console.log(matrixChainMultiplication([6, 2, 5, 20]));
console.log(matrixChainMultiplication([30, 35, 15, 5, 10, 20, 25]));
