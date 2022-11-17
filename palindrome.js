// Number palindrome
function palindrome(num) {
  var final = 0;
  var temp = num;
  while (num > 0) {
    let a = num % 10;
    num = parseInt(num / 10);
    final = final * 10 + a;
  }
  if (final === temp) {
    alert("This is a Palindrome");
  } else alert("Not a Palindrome");
}
palindrome(123454321);

// with javascript functions
let num = 123454321;
function palindrome(num) {
  let res = num.toString().split("").reverse().join();
  if (num === Number(res)) {
    alert("This is a Palindrome");
  } else alert("Not a Palindrome");
}

//string palindrome
function palindrome(str) {
  let len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
    return false;
  }
}
palindrome("malayalam");
