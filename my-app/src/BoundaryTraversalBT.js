class Solution {
  constructor() {
    this.max_height = 0;
    this.maxRight = 0;
  }

  getLeft(root, res, level) {
    if (root === null) return;
    else {
      if (this.max_height < level) {
        this.max_height = level;
        res.push(root.data);
      }
      this.getLeft(root.left, res, level + 1);
      this.getLeft(root.right, res, level + 1);
    }
    return res;
  }
  getLeave(root, leave) {
    if (root === null) return;
    else {
      if (root.left === null && root.right === null) {
        leave.push(root.data);
      }

      this.getLeave(root.left, leave);
      this.getLeave(root.right, leave);
    }
    return leave;
  }
  getRight(root, res, level) {
    if (root === null) return;
    else {
      if (root.right == null) return res;
      else {
        if (this.maxRight < level) {
          this.maxRight = level;
          res.push(root.data);
        }
        this.getRight(root.right, res, level + 1);
        this.getRight(root.left, res, level + 1);
      }
    }
    return res;
  }
  boundary(root) {
    //your goes code here
    let res = [root.data];
    let leaveLeft = [];
    let leaveRight = [];
    let right = [];
    let leftTraversal = this.getLeft(root.left, res, 1);
    let leaveTraversal = this.getLeave(root.left, leaveLeft);
    let leaveRightTraversal = this.getLeave(root.right, leaveRight);

    let rigthTraversal = this.getRight(root.right, right, 1);
    //console.log("leftTraversal:",leftTraversal,"leaveTraversal",leaveTraversal,"rigthTraversal:",rigthTraversal)
    if (leftTraversal && leaveTraversal) {
      if (leftTraversal[leftTraversal.length - 1] === leaveTraversal[0]) {
        leftTraversal.pop();
      }
    }
    if (rigthTraversal && leaveTraversal) {
      if (leaveTraversal[leaveTraversal.length - 1] === rigthTraversal[0]) {
        leaveTraversal.pop();
      }
    }
    //console.log("leftTraversal:",leftTraversal,"leaveTraversal",leaveTraversal,"rigthTraversal:",rigthTraversal)
    return [
      ...(leftTraversal ? leftTraversal : []),
      ...(leaveTraversal ? leaveTraversal : []),
      ...(leaveRightTraversal ? leaveRightTraversal : []),
      ...(rigthTraversal ? rigthTraversal : []),
    ];
  }
}
class Solution {
  constructor() {
    this.max_height = 0;
    this.maxRight = 0;
  }

  getLeft(root, res, level) {
    if (root === null) return res;
    else {
      if (root.right == null && root.left == null) return res;

      if (this.max_height < level) {
        this.max_height = level;
        res.push(root.data);
      }
      this.getLeft(root.left, res, level + 1);
      this.getLeft(root.right, res, level + 1);
    }
    return res;
  }
  getLeave(root, leave) {
    if (root === null) return;
    else {
      this.getLeave(root.left, leave);
      if (root.left === null && root.right === null) {
        leave.push(root.data);
      }

      this.getLeave(root.right, leave);
    }
    return leave;
  }
  getRight(root, res) {
    //console.log(root,res,level,this.maxRight)
    if (root === null) return;

    if (root.right != null) {
      this.getRight(root.right, res);
      res.push(root.data);
    } else if (root.left != null) {
      this.getRight(root.left, res);
      res.push(root.data);
    }
    return res;
  }
  boundary(root) {
    //your goes code here
    let res = [root.data];
    let leaveLeft = [];
    let leaveRight = [];
    let right = [];
    let leftTraversal = this.getLeft(root.left, res, 1);
    let leaveTraversal = this.getLeave(root.left, leaveLeft);
    let leaveRightTraversal = this.getLeave(root.right, leaveRight);

    let rigthTraversal = this.getRight(root.right, right, 1);
    //console.log("leftTraversal:",leftTraversal,"leaveTraversal",leaveTraversal,"rigthTraversal:",rigthTraversal)

    //console.log("leftTraversal:",leftTraversal,"leaveTraversal",leaveTraversal,"leaveRightTraversal",leaveRightTraversal,"rigthTraversal:",rigthTraversal)
    return [
      ...(leftTraversal ? leftTraversal : []),
      ...(leaveTraversal ? leaveTraversal : []),
      ...(leaveRightTraversal ? leaveRightTraversal : []),
      ...(rigthTraversal ? rigthTraversal : []),
    ];
  }
}
