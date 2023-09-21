// You are given a 0-indexed sorted array of integers nums.

// You can perform the following operation any number of times:

// Choose two indices, i and j, where i < j, such that nums[i] < nums[j].
// Then, remove the elements at indices i and j from nums. The remaining elements retain their original order, and the array is re-indexed.
// Return an integer that denotes the minimum length of nums after performing the operation any number of times (including zero).

// Note that nums is sorted in non-decreasing order.

function minLengthAfterRemovals(arr){
  let i = 0
  let j = 1

  while (j < arr.length){
    if (arr[i] < arr[j]){
      arr.splice(i, 2)
    }
    else if (arr[i] === arr[j]){
      j++
    }
    else {
      return
    }
  }
  console.log('RETURN', arr.length)
 return arr.length
}

minLengthAfterRemovals([2,3,6,9])//0
minLengthAfterRemovals([1,1,2]) // 1
