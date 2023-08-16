// Write a recursive function called reverse which accepts a string and returns a new string in reverse.


function reverse (string) {

  if (string.length === 1){
    return string;
  }

  const char = string.slice(0,string.length-1)
  //console.log('STRING', string, 'CHAR', char)

  return string.slice(-1).concat(reverse(string.slice(0,string.length-1)))

}

 console.log(reverse('awesome')) // 'emosewa'
 console.log(reverse('rithmschool')) // 'loohcsmhtir'
// reverse('no') // 'on
