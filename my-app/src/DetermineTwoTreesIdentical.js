class Solution {
  //Function to check if two trees are identical.
  getPreOrder(root, res) {
    if (root != null) {
      res.push(root.data);
      this.getPreOrder(root.left, res);
      this.getPreOrder(root.right, res);
      return res;
    }
  }
  isIdentical(root1, root2) {
    //your code here
    let res = [];
    let res2 = [];
    let res3 = this.getPreOrder(root1, res);
    let res4 = this.getPreOrder(root2, res2);
    // console.log(res.length,res2.length,res3,res4)
    return (
      res.length === res2.length &&
      res3.every((value, index) => value === res4[index])
    );
  }
}
