const canSum = (target, numbers) => {
  const table = Array(target + 1).fill(null);
  table[0] = [];
//   console.log(table);
  for (let i = 0; i <= table.length; i++) {
    if (table[i]) {
      for (let num of numbers) {
        table[i + num] = [...table[i], num];
        // console.log(table);
      }
    }

    return table[target];
  }
};

console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2,3]));
