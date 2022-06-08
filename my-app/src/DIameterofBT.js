class Solution {
  // Function to return the diameter of a Binary Tree.
  constructor() {
    this.max_length = 1;
  }
  getHeight(root) {
    if (root === null) {
      return 0;
    } else {
      let lheight = this.getHeight(root.left);
      let rheight = this.getHeight(root.right);
      if (lheight > rheight) {
        return lheight + 1;
      } else {
        return rheight + 1;
      }
    }
  }
  getHeightDuplicate(root) {
    if (root === null) {
      return 0;
    } else {
      return (
        1 + Math.max(this.getHeight(root.left), this.getHeight(root.right))
      );
    }
  }
  getLongestPath(root) {
    if (root === null) return 0;
    else {
      let longestPath =
        this.getHeight(root.left) + this.getHeight(root.right) + 1;

      return longestPath;
    }
  }
  diameter(root) {
    // your code here

    return Math.max(
      this.getLongestPath(root.left),
      this.getLongestPath(root.right),
      this.getLongestPath(root)
    );
  }
}
