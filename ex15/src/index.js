// Only change code below this line
function myDoWhile() {
  var i = 0;
  var myNumbers = "";
  do {
    if (i <= 8) {
      myNumbers = myNumbers + i + ", ";
    } else {
      myNumbers = myNumbers + i;
    }
    i++;
  } while (i < 10);
  return myNumbers;
}
console.log(myDoWhile());
// Only change code above this line
module.exports = myDoWhile;
