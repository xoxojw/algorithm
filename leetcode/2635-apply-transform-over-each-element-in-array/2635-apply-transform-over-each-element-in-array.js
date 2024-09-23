/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let answer = [];

    for (let i=0; i<arr.length; i++) {
        answer.push(fn(arr[i], i))
    }

    return answer;
};