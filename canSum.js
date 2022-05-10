function canSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) {
    return memo[targetSum];
  }
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const reminder = targetSum - num;
    if (canSum(reminder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false
}

// console.log(canSum(7, [1, 3]));
console.log(canSum(3000, [5,15, 14]));
