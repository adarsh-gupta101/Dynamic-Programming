function howSum(targetSum, numbers, memo = {}) {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const reminder = targetSum - num;
    // console.log("REMINDERRRRRR", reminder, num, "NUMBERRRR");
    const reminderresult = howSum(reminder, numbers, memo);
    // console.log("REMINDERRESULT", reminderresult, num);
    if (reminderresult !== null) {
      memo[targetSum] = [...reminderresult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
}

// console.log(howSum(7, [1, 3]));
console.log(howSum(200, [4, 2]));
