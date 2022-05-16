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

// console.log(typeof Node )

const depthFirstValues = (root) => {
  const stack = [root];
  const result=[]
  // console.log(stack);
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val)
    // console.log(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return `${result}`
};

const depthFirstValuesRecursion = (root) => {
  // const stack = [root];
  // console.log(stack);
  const current = root;
  if (current == null) return;

  console.log(current.val);

  if (current.left) depthFirstValuesRecursion(current.left);
  if (current.right) depthFirstValuesRecursion(current.right);
};

depthFirstValues(a);
depthFirstValuesRecursion(a);
