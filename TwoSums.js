var twoSum = function(nums, target) {


  for (let i = 0; i < nums.length; i++){
    for (let j = i +1; j <= nums.length; j++){
      if (nums[i] + nums[j] === target){
        return [i,j]
      }
    }
  }

};

//let test1 = twoSum([-1,-2,-3,-4,-5], -8)
// console.log('TEST 1:', test1)
// let test2 = twoSum([2,7,11,15], 9)
// let test3 = twoSum([3,3], 6)


