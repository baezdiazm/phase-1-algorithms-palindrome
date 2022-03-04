function isPalindrome(word) {
  // Write your algorithm here
  const phrase = ((word.split("")).reverse()).join('')
  return(phrase == word)? true : false
}
/* 
  App starts:
    User inputs a string
    asign string to a variable (phrase)
    program splits the string by letter into an array
    program inverts the order of the letter in the array
    program joins letters into a variable (newPhrase)
    compare initial string vs new string
    return "is palindrome" if true
    return "Not a palindrome" if false
  App Ends
*/

/*
  I split, reversed, then joined the initial phrase and asigned that to a variable called "Phrase"
  I used ternary operators to compare the original word versus the new reversed word to then return true if identical and false if not identical
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
