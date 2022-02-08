function perfectSquare(x) {
  let rt = Math.sqrt(x);
  let root = 0;
  // console.log(Math.sqrt(x))
  if (rt % 1 != 0) {
    console.log(-1);
  } else if (rt % 1 == 0) {
    root = rt += 1;
    console.log(root * root);
  }
}

perfectSquare(144);
