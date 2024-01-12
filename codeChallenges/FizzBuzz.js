// Write a JavaScript program that prints out a String or Number: The printed value will depend on the value of a Number. If the Number is a multiple of 3, print "Fizz". If the Number is a multiple of 5, print "Buzz". If the Number is a multiple of both 3 and 5, print "FizzBuzz". If the Number is not a multiple of either, print the Number itself.

function FizzBuzz(target_num) {
  for(let i = 1; i <= target_num; i++) {
    let output = "";
    if (!(i%3)) output += "Fizz";
    if (!(i%5)) output += "Buzz";
    console.log(output?output:i);
  }
}