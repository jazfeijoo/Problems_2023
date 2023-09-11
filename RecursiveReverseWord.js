// Write a recursive function called reverse which accepts a string and returns a new string in reverse.


function reverse (string) {

  if (string.length === 1){
    return string;
  }

  const char = string.slice(0,string.length-1)
  //console.log('STRING', string, 'CHAR', char)

  return string.slice(-1).concat(reverse(string.slice(0,string.length-1)))

}

//  console.log(reverse('awesome')) // 'emosewa'
//  console.log(reverse('rithmschool')) // 'loohcsmhtir'
// reverse('no') // 'on

// function binarySearch(arr, val){

//   let left = 0
//   let right = arr.length - 1
//   let middle = Math.floor((left + right) /2)

//   while ( arr[middle] !== val && left < right){
//     if (arr[middle] < val){
//       left = middle +1
//     } else if (val < arr[middle]){
//       right = middle -1
//     }
//     middle = Math.floor((left + right)/2)
//   }
//   return arr[middle] === val ? middle : -1

// }

// console.log(binarySearch([1,2,3,4,5],6)) // -1
// console.log(binarySearch([1,2,3,4,5],3)) // 2
// // console.log(binarySearch([
// //   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
// //   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// // ], 95) )// 16

// function stringSearch(long, short){
//   let count = 0
//    const helper = function(long, short){
//     let curr = long.slice(0,short.length)


//     if (long.length < short.length){

//       return
//     }
//     if (curr === short){
//       count++

//     }
//     //alse long is longer than short

//       const nextI = long.indexOf(short[0],1)
//       helper(long.slice(nextI), short)

//    }
//    helper(long, short)
//    console.log('COUNT', count)

//   return count;

// }
// stringSearch('ottttowomgzomg', 'omg')//2

//  stringSearch('hello haha ok ha', 'ha')//3



