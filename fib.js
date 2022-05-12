// const fib=(n)=>{
//     const arr=new Array(n+1).fill(0);

//     arr[1]=1
//     for(let i=1;i<=n;i++){

//         arr[i+1]=arr[i]+arr[i-1]
//     }
//     console.log(arr)
//     return;

// }

// console.log(fib(3))

const fib = (n) => {
  const arr = new Array(n+1).fill(0);
  console.log(arr);
  arr[1] = 1;
  for (let i = 0; i <= n; i++) {
    arr[i + 1] += arr[i];
    arr[i + 2] += arr[i];
  }
//   console.log(arr);
  return arr[n];
};

console.log(fib(100));
