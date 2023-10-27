function uniqueChar(string) {
  return string.split("").filter((character, index, obj) => {
    return obj.indexOf(character) === obj.lastIndexOf(character);
  });
}

console.log(uniqueChar("aabcd"));
