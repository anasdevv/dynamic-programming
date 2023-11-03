// using lCS
const LCS = (str1, str2) => {
  const table = new Array(str1.length + 1)
    .fill(0)
    .map(() => new Array(str2.length + 1).fill(0));

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        table[i][j] = 1 + table[i - 1][j - 1];
      } else {
        table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
      }
    }
  }
  return table;
};
const shortestSuperSequenece = (str1, str2) => {
  const table = LCS(str1, str2);
  let i = str1.length;
  j = str2.length;
  let str = '';
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      str = str1[i - 1] + str;
      i--;
      j--;
    } else if (table[i - 1][j] > table[i][j - 1]) {
      str = str1[i - 1] + str;
      i--;
    } else {
      str = str2[j - 1] + str;
      j--;
    }
  }
  while (i > 0) {
    str = str1[i - 1] + str;
    i--;
  }
  while (j > 0) {
    str = str2[j - 1] + str;
    j--;
  }
  return str;
};
console.log(shortestSuperSequenece('AGGTAB', 'GXTXAYB')); // AGGXTXAYB
console.log(shortestSuperSequenece('ABCBDAB', 'BDCABA'));
