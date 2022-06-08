class Solution {
  //Function to find the height of a binary tree.
  height(node) {
    if (node === null) return 0;
    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }
}
