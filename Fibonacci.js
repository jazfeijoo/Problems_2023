//Fibonacci Sequence Function: given an number n, return the nth number in the fibonacci sequence
// 1, 1, 2, 3, 5, 8, 13, 21, etc...

//NON-RECURSIVE SOLUTION:
const fibonacciFinder = function(n) {
  if (n < 3){
    return 1
  }
  let prev = 1
  let curr = 1
  for (let i =2; i < n; i++){
    const next = prev + curr
    prev = curr;
    curr = next;
  }
  console.log('RETURN', curr)
  return curr
}

// fibonacciFinder(6)

//RECURSIVE SOLUTION:
