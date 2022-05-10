// const gridtraverler = (n, m,memo={}) => {
//     const keys=m+","+n;
//   if (n == 1 && m == 1) {
//     return 1;
//   } else if (n == 0 || m == 0) {
//     return 0;
//   }
//   return gridtraverler(n - 1, m) + gridtraverler(n, m - 1);
// };
// console.log(gridtraverler(9,3))


const gridtraverler = (n, m,memo={}) => {
    const keys=m+","+n;   
     if (keys in memo) {return memo[keys]}

  if (n == 1 && m == 1) {
    return 1;
  } else if (n == 0 || m == 0) {
    return 0;
  }
  memo[keys]= gridtraverler(n - 1, m,memo) + gridtraverler(n, m - 1,memo);
  return memo[keys];
};

console.log(gridtraverler(10,10))