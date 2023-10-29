const knapSack = (targetWeight, weights, values) => {
  if (targetWeight < 0) return -999999;
  if (values.length === 0 || targetWeight === 0) return 0;
  return Math.max(
    // either pick it or leave it
    values[0] +
      knapSack(targetWeight - weights[0], weights.slice(1), values.slice(1)),
    knapSack(targetWeight, weights.slice(1), values.slice(1))
  );
};
const values = [1, 2, 3];
const weight = [4, 5, 1];
console.log(knapSack(4, weight, values));
console.log(knapSack(7, weight, values));
