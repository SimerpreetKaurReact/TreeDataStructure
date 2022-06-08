class BalanceParens {
  getBalanceParens() {
    let string = "()()()))(";
    let result = string.split("").reduce((acc, char) => {
      if (char === "(") {
        acc = acc + 1;
      }
      if (char === ")") {
        acc = acc - 1;
      }
      return acc;
    }, 0);
    return result ? "not balanced" : "balanced";
  }
}
