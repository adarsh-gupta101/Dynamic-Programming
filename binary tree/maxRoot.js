class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);
const g = new Node(7);
// const h = new Node(8);
// const i = new Node(9);
// const j = new Node(10);
// const k = new Node(11);
// const l = new Node(12);
// const m = new Node(13);
// const n = new Node(14);
// const o = new Node(15);
// const p = new Node(16);

a.left = b;
a.right = c;
b.right = e;
b.left = d;
c.right = f;
f.left = g;

const maxPath = (root) => {
  if (root == null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  const maxroot = Math.max(maxPath(root.left), maxPath(root.right));
  return root.val + maxroot;
};
console.warn(maxPath(a));
