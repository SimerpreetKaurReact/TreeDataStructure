class Solution {
  getLeftView(root, res) {
    if (root === null) return;
    res.push(root.data);
    if (root.left) {
      res = this.getLeftView(root.left, res);
    } else if (root.left == null) {
      res = this.getLeftView(root.right, res);
    }
    return res;
  }
  leftView(root) {
    let res = [];
    this.getLeftView(root, res);
    //your code here
    return res;
  }
}
class leftVIewBT {
  constructor() {
    this.max_level = 0;
  }

  getLeftView(root, res, level) {
    if (root === null) return;
    else if (level > this.max_level) {
      this.max_level = level;
      res.push(root.data);
    }
    this.getLeftView(root.left, res, level + 1);
    this.getLeftView(root.right, res, level + 1);
    return res;
  }
  leftView(root) {
    let res = [];
    this.getLeftView(root, res, 1);
    //your code here
    return res;
  }
}
