// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

const countUniqueValues = function (arr) {
  let count = 0
  let left = 0
  let right = arr.length - 1
  if (!arr.length ){
    console.log('COUNT', count)
    return count;
  }
  count++
  left ++
  while (left <= right ){
    // console.log(arr[left], arr[left +1])
    // console.log(arr[right], arr[right-1])
    if (arr[left-1] < arr[left]  ){
      count ++

    }
    if ( arr[right -1] < arr[right]){
      count ++

    }

    left++
    right--

  }
  console.log('COUNT', count)
  return count
}

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
