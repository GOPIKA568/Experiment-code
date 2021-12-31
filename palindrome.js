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

// with js functions
let num = 123454321;
let res = num.toString().split("").reverse().join();
if (num === Number(res)) {
  alert("This is a Palindrome");
} else alert("Not a Palindrome");
