function fibnoci(n,memo={}) {
    if (n in memo) {return memo[n]}
  if (n < 2) {
    return 1;
  } else
   memo[n]= fibnoci(n - 1,memo) + fibnoci(n - 2,memo);
   return memo[n];
}
// function fibnoci(n) {
//     if (n < 2) {
//       return 1;
//     } else
//     return fibnoci(n - 1) + fibnoci(n - 2); 
//   }
  
//   console.log(fibnoci(100));
  

console.log(fibnoci(1500));
