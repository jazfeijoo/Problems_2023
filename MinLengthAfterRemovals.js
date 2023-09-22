var findPairs = function(nums, k) {
  let count = 0
  let solved = []
  for (let i=0; i < nums.length; i++){
    let curr = nums[i]
    let map = {}
    nums.map((n, j) => {
      if (i < j){

          if (!map[n]){
            map[n] = 1
          } else {
            map[n]++
          }

      }
    })

    let diff1 = Math.abs(k - curr)
    let diff2 = Math.abs(k + curr)
   // console.log(k,'CURR',curr,'DIFF',diff1, diff2, map,map[diff1], map[diff2] )
   if (!solved.includes(curr)){
    if (curr === 0 || k === 0){
      count = map[diff1]? count+1 : count
    } else {
      if (curr < k && 0 < curr){
        count = map[diff2]? count+1: count
      } else {

        count = map[diff1] && !solved.includes(map[diff1])? count+1: count
          count = map[diff2]? count+1: count

      }
    }
   }

    solved.push(curr)
  }
  console.log('COUNT', count)
   return count;
};

 findPairs([3,1,4,1,5],2)//2
 findPairs([1,2,4,4,3,3,0,9,2,3],3)//2
findPairs([1,3,1,5,4],0)//1
findPairs([1,2,3,4,5],1)//4
