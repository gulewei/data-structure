export class TreeNode {
    val: string;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val: string) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

export function preorderTraversal(root: TreeNode | null) {
    const acc: string[] = [];
    const f = (root: TreeNode | null) => {
        if (!root) return;
        acc.push(root.val);
        f(root.left);
        f(root.right);
    };
    f(root);
    return acc;
}

export function preorderTraversal2(root: TreeNode | null) {
    const acc: string[] = [];
    const stack: TreeNode[] = [];
    while (root) {
        console.log(root, acc, stack)
        acc.push(root.val);
        if (root.left) {
            root = root.left;
            root.right && stack.push(root.right);
        } else {
            const top = stack.pop();
            top && (root = top);
        }
    }
    return acc;
}

const a = new TreeNode('1');
const b = new TreeNode('2');
const c = new TreeNode('3');
a.left = b;
a.right = c;
console.log(preorderTraversal(a));
console.log(preorderTraversal2(a));