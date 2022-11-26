function triangle(h) {
  let s = "";
  for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= h - i; j++) {
      s += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      if (i === 1) {
        s += "x";
      } else {
        if (k === 0 || k === 2 * i - 2) {
          s += "x";
        } else {
          s += "o";
        }
      }
    }
    s += "\n";
  }
  return s;
}

console.log(triangle(5));
