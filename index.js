function isPalindrome(word) {
  // Write your algorithm here
  let arrayWord = word.split('')
  let reverseWord = arrayWord.reverse().join('')
  if (word === reverseWord) {
    return true
  }
  else {
    return false
  }
}

/* 
declare a string variable
  convert the string to array using the split() method
  using reverse() to reverse the order of the array
  do a comparison of the two arrays
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
