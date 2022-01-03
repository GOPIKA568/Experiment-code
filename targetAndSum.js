let arr = [1, 2, 3, 4, 5],
  target = 5;

function targetFn(arr, target) {
  let res = [];
  for (let i of arr) {
    for (let j of arr) {
      if (i + j === target) {
        res.push([i, j]);
      }
    }
  }
  return res;
}

targetFn(arr, target);
