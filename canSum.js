// const canSum = (targetSum, numbers) => {
//   if (targetSum === 0) return true;
//   if (targetSum < 0) return false;

//   for (const num of numbers) {
//     const remainder = targetSum - num;
//     if (canSum(remainder, numbers)) return true;
//   }
//   return false;
// };
// console.log(canSum(7, [2, 3])); // true
// console.log(canSum(7, [5, 3, 4, 7])); // true
// console.log(canSum(7, [2, 4])); // false
//  now lets memoize it
const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  if (targetSum in memo) return memo[targetSum];
  for (const num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};
console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
