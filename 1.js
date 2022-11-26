function stair(str) {
  let word = "";
  str.split("");
  let strArray = [...str];
  // strArray.reverse();
  for (let i = 1; i <= strArray.length; i++) {
    for (let j = strArray.length - 1; j >= i; j--) {
      word += " ";
    }
    for (let k = 0; k < i; k++) {
      word += strArray[k];
    }
    strArray.reverse();
    word += "\n";
  }

  return word;
}
console.log(stair("foxie"));
