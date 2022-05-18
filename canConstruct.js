const canConstruct = (target, wordbank, memo = []) => {
  if (target in memo) {
    return memo[target];
  }
  if (target == "") return true;
  for (let words of wordbank) {
    if (target.indexOf(words) === 0) {
      const suffix = target.slice(words.length);
      //   console.log(suffix)
      if (canConstruct(suffix, wordbank, memo) == true) {
        memo[target] = true;
        return memo[target];
      }
    }
  }
  memo[target] = false;
  return false;
};

console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "eeeeeee",
    "eeeeeeeeeeeeeeeeeee",
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    "ee",
    "e",
    "eee",
    "eeeeee",
  ])
);
