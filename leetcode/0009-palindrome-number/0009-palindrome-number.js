/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    
    const strX = x.toString()
    const palindromeX = [...x.toString()].reverse().join("")
    return strX === palindromeX ? true : false;
};