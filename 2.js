function printI(h) {
  let s = "";
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < h; j++) {
      if (i == 0 || i == h - 1) s += "#";
      else if (j == parseInt(height / 2)) s += "|";
      else s += "|";
    }
    s += "\n";
  }
  return s;
}
console.log(printI(7));
