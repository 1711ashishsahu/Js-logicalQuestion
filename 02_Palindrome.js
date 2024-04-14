// Write a function to determine if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.

function isPalindrome(str){
    const cleanedStr = str.replace(/[^\w]/g, '').toLowerCase()
    console.log(cleanedStr);
    console.log(cleanedStr.split('').reverse().join(''));
    return cleanedStr === cleanedStr.split('').reverse().join('')
}

  // Test cases
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
  








// function isPalindrome(str) {
//     // Remove spaces, punctuation, and convert to lowercase
//     const cleanedStr = str.replace(/[^\w]/g, '').toLowerCase();
    
//     // Check if the cleaned string is equal to its reverse
//     return cleanedStr === cleanedStr.split('').reverse().join('');
//   }
  
