//Write recursive function that calculates the factorial of input n
// 4! = 4 * 3 * 2 * 1

function factorial (n) {
 if (n===1){
  return 1;
 }

 return n * factorial(n-1)
}

// console.log(factorial(4)); //24
// console.log(factorial(6)); //720
