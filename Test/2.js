`
2. https://codeforces.com/problemset/problem/1792/B



`;
const fun = (arr) => {
  let a = 0;
  let b = 0;
  let j1 = arr[0];
  let j2 = arr[1];
  let j3 = arr[2];
  let j4 = arr[3];
  let x = Math.min(j2, j3);
  for (let i = 0; i < x; i++) {
    a += 1;
    b += 1;
  }

  let m = 0;
  if (j4 === 0) m = arr[0];
  else {
    let b = Math.min(j1, j4);
    if (b === j1) m = b * 2 + 1;
    else {
      let d = j1 - b + 1;
      console.log("d: ", d);
      m = b * 2 + d;
    }
  }
  m + a + b;
  if (j2 === 0 || j3 === 0) m--;
  console.log("m+a+b+1: ", m, a, b, m + a + b);
};

// let arr = [2, 5, 10, 6]s;
// let arr = [0, 0, 0, 5];
// let arr = [5, 0, 0, 2];
let arr = [4, 5, 10, 2];
console.log("------ans------>", fun(arr));

// 5 0 0 2
// 0 0 0 5
// 2 5 10 6
// 3 0 0 7
