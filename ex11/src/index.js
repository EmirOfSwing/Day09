function switchCase(letter) {
  // Write cide below this line
  var animals = "";

  switch (letter) {
    case "a":
      animals = "antelope";
      break;
    case "b":
      animals = "bird";
      break;
    case "c":
      animals = "cat";
      break;
    default:
      animals = "stuff";
  }
  return animals;
  // Write code above this line
}

console.log(switchCase("a")); // Change this line
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase(4));
module.exports = switchCase;
