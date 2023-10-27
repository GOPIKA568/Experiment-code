
//<----------1------------->
// function uniqueArr(Arr) {
//  return [...new Set(Arr)]
// }

//<----------2------------->
// function uniqueArr(Arr) {
// return Arr.filter((item,i,arr) => arr.indexOf(item) === i)
// }

//<----------3------------->
function unique(arr) {
  arr.filter((item, i) => {
    return arr.indexOf(item) === arr.lastIndexOf(item);
  });
}

uniqueArr([2,3,5,3,6,7,4,2,9,6,7,4,3])