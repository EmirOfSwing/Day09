// Only change code below this line
function inverseWhile() {
  var fiveNumbers = "";
  var i = 5;
  while (i >= 0) {
    if (i >= 1) {
      fiveNumbers = fiveNumbers + i + ",";
    } else {
      fiveNumbers = fiveNumbers + i;
    }
    i--;
  }
  return fiveNumbers;
}
// Only change code above this line
console.log(inverseWhile());
module.exports = inverseWhile;
