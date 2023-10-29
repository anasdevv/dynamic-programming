const LCS = (str1, str2) => {
  const func = (i, j, memo = {}) => {
    if (`${i}${j}` in memo) return memo[`${i}${j}`];
    if (i === 0 || j === 0) return 0;
    if (str1[i] === str2[j]) {
      memo[`${i}${j}`] = 1 + func(i - 1, j - 1, memo);
      return memo[`${i}${j}`];
    } else {
      memo[`${i}${j}`] = Math.max(func(i - 1, j, memo), func(i, j - 1, memo));
      return memo[`${i}${j}`];
    }
  };
  return func(str1.length, str2.length);
};
console.log(LCS('ABCDGH', 'AEDFHR'));
console.log(LCS('AGGTAB', 'GXTXAYB'));
console.log(LCS('XMJYAUZ', 'MZJAWXU'));
console.log(LCS('ABCBDAB', 'AEDFHR'));
``;
