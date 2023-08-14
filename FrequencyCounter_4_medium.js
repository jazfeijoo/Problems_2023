//Longest Substring Without Repeating Characters
//Given a string s, find the length of the longest substring without repeating characters.


const lengthOfLongestSubString = function(string){

  if (!string || !string[0]) {
    return 0
  }
  if (string.length === 1){
    return 1
  }
  const counter = {}
  let start = 0;
  let len = 0

  // for( let i = 0; i < string.length; i++){
  //   let char = string[i]
  //   if (start <= counter[char]){
  //     start = counter[char] + 1
  //   }
  //   counter[char] = i

  // }

}

// lengthOfLongestSubString("abcabcbb") // 3
// lengthOfLongestSubString("bbbb") // 1
lengthOfLongestSubString("pwwkertw") // 5
