const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortcombo = null;
  for (let num of numbers) {
    const reminder = targetSum - num;
    const reminderresult = bestSum(reminder, numbers, memo);

    if (reminderresult !== null) {
      const combination = [...reminderresult, num];

      if (shortcombo === null || shortcombo.length > combination.length) {
        //   console.log(num, combination);
        shortcombo = combination;
      }
    }
  }
  memo[targetSum] = shortcombo;
  return shortcombo;
};

console.log(bestSum(20, [4, 5, 10, 2]));
