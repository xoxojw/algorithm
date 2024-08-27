/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x == [...x.toString()].reverse().join("")
};