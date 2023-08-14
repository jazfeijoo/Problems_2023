//Write a function that receives an input of 2 arrays and checks whether arr1[i] has the corresponding SQUARED value in arr2. It checks this for all values and if they all match, then it returns true. Order does not matter.
//Example: function same([1,2,2,4], [1,16,4,4]) => true
//Example: function same([1,2,2,4], [1,16,16,4]) => false

const same = function(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false;
  }
  let counter1 = {}
  let counter2 = {}
  for(let val of arr1){
    counter1[val] = (counter1[val] || 0) +1
  }
  for(let val of arr2){
    counter2[val] = (counter2[val] || 0) +1
  }
  for (let key in counter1){
    if (! (key ** 2 in counter2 )){
      return false;
    }
    if (counter1[key] !== counter2[key **2]){
      return false
    }
    return true
  }


}

// same([1,2,2,4], [1,16,4,4])
// console.log(same([1,2,2,4], [1,16,4,4]))

