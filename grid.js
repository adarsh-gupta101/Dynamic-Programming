const grid = (m, n) => {
  const array =  Array(m+1).fill(0).map(() => new Array(n+1).fill(0));
  console.log(array)
  array[1][1] = 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = array[i][j];
     if(j+1<=n) array[i][j+1]+= current ;
     if(i+1<=m) array[i+1][j] += current
    }
  }
  return array[m][n];
};

console.log(grid(18, 18));
