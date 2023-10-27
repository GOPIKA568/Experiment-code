function charFreq(str) {
  return str.split("").reduce((prev, curr) => {
    prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
    return prev;
  }, {});
}

charFreq("meera");