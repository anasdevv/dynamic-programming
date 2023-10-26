const { MAX_UNSIGNED_VALUE } = require('long');

const matrixChainMultiplication = (dims) => {
  if (dims.length <= 2) {
    return 0;
  }
  let minCost = MAX_UNSIGNED_VALUE;
  for (let i = 1; i < dims.length; i++) {
    let cost =
      matrixChainMultiplication(dims.slice(0, i)) +
      matrixChainMultiplication(dims.slice(i)) +
      dims[0] * dims[i] * dims[dims.length - 1];
    if (cost < minCost) minCost = cost;
  }
  return minCost;
};
console.log(matrixChainMultiplication([6, 2, 5, 20]));
