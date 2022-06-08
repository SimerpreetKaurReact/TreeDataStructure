class Solution {
  //Function to find a continuous sub-array which adds up to a given number.
  subarraySum(arr, n, s) {
    //your code here
    let finalArr = [];
    for (let i = 0; i < n - 1; i++) {
      let j = i + 1;
      let sum = arr[i];
      finalArr = [];
      finalArr.push(i + 1);
      if (sum > s) i++;
      while (j != n) {
        sum = sum + arr[j];
        if (s === sum) {
          finalArr.push(j + 1);
          j = n;
          i = n;
        } else {
          j++;
        }
      }
    }
    //console.log(finalArr,finalArr.length<2)
    return finalArr.length < 2 ? [-1] : finalArr;
  }
}
class Solution {
  //Function to find a continuous sub-array which adds up to a given number.
  subarraySum(arr, n, s) {
    //your code here
    let map = {};
    let finalArr = [];
    let temp = arr.map((item, index) => {
      return { sum: item, i: [index + 1] };
    });
    console.log("initital temp", temp);
    for (let i = 1; i < n - 1; i++) {
      let newTemp = temp.map((item, index) => {
        if (index == i) {
          return item;
        } else if (item.sum === s || item.sum > s) {
          return item;
        } else {
          item.sum = item.sum + arr[i];
          if (item.sum === s) {
            item.i.push(i + 1);
          }
        }
        return item;
      });
      temp = newTemp;
    }
    let result = temp.find((ele) => ele.sum == s);
    console.log(result, temp);
    return result ? result.i.sort() : [-1];
  }
}
