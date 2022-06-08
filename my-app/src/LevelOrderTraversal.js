class Solution {
  //Function to return the level order traversal of a tree.
  constructor() {
    this.maxLevel = 0;
  }
  getlevelOrder(node, res, level) {
    //your code here

    if (node === null) return 0;
    else if (level == 1) {
      res.push(node.data);
    }

    this.getlevelOrder(node.left, res, level - 1);
    this.getlevelOrder(node.right, res, level - 1);
    return res;
  }
  getHeight(node) {
    if (node == null) return 0;
    else {
      return (
        Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1
      );
    }
  }
  levelOrder(node) {
    //your code here
    let res = [];
    if (node === null) return;
    let ht = this.getHeight(node);
    for (let i = 1; i <= ht; i++) {
      this.getlevelOrder(node, res, i);
    }
    return res;
  }
}
const levelOrdernonREcuresive = (node) => {
  //your code here

  let queue = [];
  let res = [];
  queue.push(node);
  while (queue.length !== 0) {
    var temp = queue.shift();
    res.push(temp.data);
    if (temp.left != null) {
      queue.push(temp.left);
    }
    if (temp.right != null) {
      queue.push(temp.right);
    }
  }

  return res;
};
