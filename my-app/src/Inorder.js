class Solution {
  // Function to return a list containing the inorder traversal of the tree.
  getInorder(root, res) {
    if (root == null) return;
    this.getInorder(root.left, res);
    res.push(root.data);
    this.getInorder(root.right, res);
  }
  inOrder(root) {
    let res = [];
    this.getInorder(root, res);
    return res;
  }
}
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
