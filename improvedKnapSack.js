const knapSack = (targetWeight, weights, values, memo = {}) => {
  if (targetWeight < 0) return { value: -999999, selectedValues: [] };
  if (values.length === 0 || targetWeight === 0)
    return { value: 0, selectedValues: [] };
  if (targetWeight in memo) return memo[targetWeight];
  const pickCurrentItem = knapSack(
    targetWeight - weights[0],
    weights.slice(1),
    values.slice(1),
    memo
  );
  const leaveCurrentItem = knapSack(
    targetWeight,
    weights.slice(1),
    values.slice(1),
    memo
  );
  let res = {};
  if (values[0] + pickCurrentItem.value > leaveCurrentItem.value) {
    res = {
      value: values[0] + pickCurrentItem.value,
      selectedValues: [values[0], ...pickCurrentItem.selectedValues],
    };
  } else {
    res = {
      value: leaveCurrentItem.value,
      selectedValues: [...leaveCurrentItem.selectedValues],
    };
  }
  memo[targetWeight] = res;
  return res;
};

const values = [1, 2, 3];
const weight = [4, 5, 1];

console.log(knapSack(4, weight, values));
console.log(knapSack(7, weight, values));
