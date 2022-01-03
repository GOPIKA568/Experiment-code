let nums = [2, 7, 11, 15],
  target = 9;

function targetAndIndex(nums, target) {
  let indexes = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) indexes.push(i, j);
    }
  }
  return indexes;
}
targetAndIndex(nums, target);

//output
//[0,1]
