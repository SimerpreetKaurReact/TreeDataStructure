class Solution {
  // Should return true if tree is Sum Tree, else false
  constructor() {
    this.flag = true;
  }

  getSum(root) {
    if (root == null) return 0;
    else if (root.left === null && root.right === null) return root.key;
    else {
      let leftSum = this.getSum(root.left);
      let rightSum = this.getSum(root.right);
      //console.log("inside loop",leftSum,rightSum,root.key)
      if (root.key != leftSum + rightSum) {
        this.flag = false;
      }
      return leftSum + rightSum + root.key;
    }
  }

  isSumTree(root) {
    if (root == null) return 0;
    else if (root.left === null && root.right === null) return 1;
    else {
      let leftSum = this.getSum(root.left);
      let rightSum = this.getSum(root.right);
      //console.log("outside",leftSum,rightSum,root.key)

      if (root.key != leftSum + rightSum) {
        this.flag = false;
      }
    }
    return this.flag;
  }
}
