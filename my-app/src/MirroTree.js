class Solution {
  // Function to convert a binary tree into its mirror tree.
  getMirror(node, res) {
    if (node == null) return;
    else {
      let temp = node.left;
      node.left = node.right;
      node.right = temp;
      res.push(node);
      this.getMirror(node.left, res);
      this.getMirror(node.right, res);
    }
    return res;
  }
  mirror(node) {
    // your code here
    let res = [];
    if (node === 0) return [];
    return this.getMirror(node, res);
  }
}
