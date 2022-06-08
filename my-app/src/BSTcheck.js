class Solution {
  //Function to check whether a Binary Tree is BST or not.
  isBST(root) {
    return this.BSTUtil(root, Number.MIN_VALUE, Number.MAX_VALUE);
  }

  BSTUtil(node, min, max) {
    if (node == null) return 1;
    if (node.data < min || node.data > max) return false;
    else {
      return (
        this.BSTUtil(node.left, min, node.data - 1) &&
        this.BSTUtil(node.right, node.data + 1, max)
      );
    }
  }
}
class Solution {
  //Function to check whether a Binary Tree is BST or not.

  isBST(root) {
    if (root === null) return 1;
    else if (root.data === "N") return 0;

    if (Number.isInteger(root.data) != true) return 0;
    else {
      if (root.left !== null && root.left.data > root.data) return false;
      if (root.right != null && root.right.data < root.data) return false;

      if (!this.isBST(root.left) || !this.isBST(root.right)) return false;

      return 1;
    }
  }
}
