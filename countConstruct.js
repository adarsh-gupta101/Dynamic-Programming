const CountConstruct = (target, wordbank,memo={}) => {
    if(target in memo){return memo[target]}
  if (target == "") return 1;
  let total = 0;
  for (let words of wordbank) {
    if (target.indexOf(words) === 0) {
      const suffix = target.slice(words.length);
      const numway = CountConstruct(suffix, wordbank,memo);
      total += numway;
      // return ;
    }
  }
  memo[target]= total;
  return total;
};

console.log(
  CountConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", [
    "p",
    "u",
    "r",
    "p",
    "l",
    "e",
    "purp",
    "pur",
  ])
);
console.log(
  CountConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", [
    "eeeeeee",
    "eeeeeeeeeeeeeeeeeee",
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    "ee",
    "e",
    "eee",
    "eeeeee",
  ])
);
