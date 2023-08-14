// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const containsDuplicates = function (arr) {
  let answer = false
  const counter = {}
  for(let val of arr){
    counter[val] = (counter[val] || 0) + 1
  }
  for (let key in counter){
    if (1 < counter[key]  ){
      answer = true
    }
  }
  console.log('ANSWER', answer)
  return answer;
}

// containsDuplicates([1,1,1,3,3,4,3,2,4,2]) //true
//  containsDuplicates([1,17,,3,4,2,8]) //false
