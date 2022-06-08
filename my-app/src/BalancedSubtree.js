class Solution {
  //Function to check whether a binary tree is balanced or not.
  height(node) {
    if (node === null) return 0;
    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }
  isBalanced(root) {
    //your code here
    if (root === null) return 1;
    else {
      let balance = Math.abs(this.height(root.left) - this.height(root.right));
      //console.log(this.height(root.left),this.height(root.right))

      return balance <= 1 &&
        this.isBalanced(root.left) &&
        this.isBalanced(root.right)
        ? 1
        : 0;
    }
  }
}
