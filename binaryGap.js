function getIndex(arr, val) {
  const firstOne = arr.indexOf(val);
  let NewBinaryArray = arr.slice(firstOne + 1);
  const secondOne = NewBinaryArray.indexOf(val);
  let gaps = [];
  gaps.push(secondOne);
  return gaps.length > 0 ? Math.max.apply(Math, gaps) : 0;
}

function dec2bin(dec) {
  let nToBin = dec.toString(2);
  let a = nToBin.split("");
  if (a.includes("0")) {
    if (a.includes("1")) {
      let b = a.filter((x) => x === "1").length;
      if (b.length <= 1) return 0;
      else {
        getIndex(a, "1");
      }
    }
  } else return 0;
}

dec2bin(1041);

//output
//5
