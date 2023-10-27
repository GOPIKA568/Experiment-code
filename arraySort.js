function sortedArr(Arr) {
  for (var i = 0; i < Arr.length; i++) {
    for (var j = i; j < Arr.length; j++) {
      if (Arr[i] > Arr[j]) {
        var x = Arr[i];
        Arr[i] = Arr[j];
        Arr[j] = x;
      }
    }
  }
  return Arr
}
console.log(sortedArr([1, 7, 2, 8, 3, 4, 5, 0, 9]));
