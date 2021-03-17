// Only change code below this line
function logicalEndOperator(num) {
  if (num <= 80 && num >= 40) {
    return "Yes";
  }
return "No";
}

  console.log(logicalEndOperator(0));
  console.log(logicalEndOperator(24));
  console.log(logicalEndOperator(45));
  console.log(logicalEndOperator(57));
  console.log(logicalEndOperator(100));

  // Only change code above this line
  module.exports = logicalEndOperator;