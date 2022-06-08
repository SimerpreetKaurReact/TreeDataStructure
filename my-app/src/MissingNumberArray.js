class Solution {
  MissingNumber(array, n) {
    //code here
    let result = [];
    if (array.length == 1) {
      array[0] === 1 ? (result = [2]) : (result = [1]);
      return result.shift();
    }
    array
      .sort((a, b) => a - b)
      .reduce((acc, ele, index) => {
        //console.log(acc,ele,index)

        if (ele != acc) {
          result.push(acc);
        }
        if (index === array.length - 1 && index <= n) {
          result.push(acc + 1);
        }
        return acc + 1;
      }, 1);
    //console.log(result)
    return result.length ? result.shift() : -1;
  }
}
MissingNumber(array,n){
    //code here
    let SumN=(n*(n+1))/2
    let sum=0
    array.forEach(ele=> sum+=ele)
    //console.log(SumN,sum)
    return SumN-sum
}