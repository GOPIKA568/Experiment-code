function palindrome(num) {
    var final = 0;
    var temp = num;
    while (num > 0) {
      let a = num % 10;
      num = parseInt(num / 10);
      final = final * 10 + a;
    }
    if (final === temp) {
      alert("palin");
    } else alert("not");
  }

palindrome(123454321);