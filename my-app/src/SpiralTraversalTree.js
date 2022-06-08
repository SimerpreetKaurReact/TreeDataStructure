class Solution {
  //Function to return a list containing the level order
  //traversal in spiral form.
  getSpiralHelp(root, res, level) {
    if (root === null) return res;
    if (level % 2 === 0) {
      res.push(root.data);
      this.getSpiralHelp(root.left, res, level + 1);
      this.getSpiralHelp(root.right, res, level + 1);
    } else {
      this.getSpiralHelp(root.left, res, level + 1);
      this.getSpiralHelp(root.right, res, level + 1);
      res.push(root.data);
    }

    return res;
  }
  findSpiral(root) {
    //your code here
    let res = [];
    res = this.getSpiralHelp(root, res, 0);
    return res;
  }
}
