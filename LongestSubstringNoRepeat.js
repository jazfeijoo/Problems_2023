// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = function (s) {
  let longestSub = '';
  let currSub = ''
  if (s.length <=1){

    return s.length
  }
  for (let i = 0; i < s.length -1 ;i++){
    let char = s[i]
    if (!currSub.includes(char)){
      currSub = currSub.concat(char)
       console.log('CURR SUB', currSub, char, i, longestSub)
       if (longestSub.length < currSub.length){
        longestSub = currSub

      }

    } else {
      console.log('else...', i, longestSub, 'curr',currSub)
      if (longestSub.length < currSub.length){
        longestSub = currSub

      }
      currSub = char
    }
  }
   console.log('RETURN', longestSub.length)
  return longestSub.length
}

// lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("pwwkew")
