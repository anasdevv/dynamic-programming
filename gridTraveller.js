const gridTraveller = (m, n, memo = {}) => {
  if (m <= 0 || n <= 0) return 0;
  if (m == 1 && n == 1) return 1;
  if (`${m},${n}` in memo) return memo[`${m},${n}`];
  else
    return (memo[`${m},${n}`] =
      gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo));
};
console.log(gridTraveller(2, 3)); // 3
