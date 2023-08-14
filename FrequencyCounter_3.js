// Write a program in JavaScript to check if two strings are anagrams of each other or not

const anagramChecker = function (st1, st2){
  const counter1 = {}
  const counter2 = {}
  for (let i =0; i < st1.length; i++){
    let char = st1[i]
    counter1[char] = (counter1[char] || 0) + 1
  }
  for (let i =0; i < st2.length; i++){
    let char = st2[i]
    counter2[char] = (counter2[char] || 0) + 1
  }
  for(let key in counter1){
    if (! key in counter2){
      return false;
    }
    if (counter1[key] !== counter2[key]){
      return false;
    }

  }
  return true;
}
// console.log(anagramChecker("india","nidia")) //TRUE
// console.log(anagramChecker("hackathon","achcthoon")) //FALSE
