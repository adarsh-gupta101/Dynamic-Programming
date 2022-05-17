class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.right = e;
b.left = d;
c.right = f;

const treeIncludes = (root, target) => {
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val === target) return true;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
};

const treeIncludesRecursive = (root, target) => {
  if (root === null) return false;
  console.log(root.val);

  if (root.val === target) return true;

  return (
    treeIncludesRecursive(root.right, target) ||
    treeIncludesRecursive(root.left, target)
  );

  //   return false;
};

// console.log(treeIncludes(a, "e"));
console.log(treeIncludesRecursive(a, "f"));

//  a
// /\
// b  c
// /\ \
// d e f
