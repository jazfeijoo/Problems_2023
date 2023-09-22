// You are given a 0-indexed sorted array of integers nums.

// You can perform the following operation any number of times:

// Choose two indices, i and j, where i < j, such that nums[i] < nums[j].
// Then, remove the elements at indices i and j from nums. The remaining elements retain their original order, and the array is re-indexed.
// Return an integer that denotes the minimum length of nums after performing the operation any number of times (including zero).

// Note that nums is sorted in non-decreasing order.

function minLengthAfterRemovals(nums){
let len = nums.length
let removed = 0
let half = Math.floor(len/2)
for (let i = 0; j = half; i < half && j < len){
 let left = nums[i]
 let right = nums[j]
 if (left < right){
  removed += 2
  i++
  j++
 } else {
  j++
 }
}
console.log('RETURN', len - removed)
return len - removed;

}

  minLengthAfterRemovals([2,3,6,9])//0
  minLengthAfterRemovals([1,1,2]) // 1
 minLengthAfterRemovals([1,1,2,2]) // 0
 minLengthAfterRemovals([1,3,3,3,4]) // 1
 minLengthAfterRemovals([1,1,1,1,1]) // 5
