/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const reverseX = x > 0 ? parseInt([...x.toString()].reverse().join("")) : -parseInt([...x.toString()].reverse().join(""))
    if ((reverseX > Math.pow(2, 31) - 1) || (reverseX < -Math.pow(2, 31))) return 0
    else return reverseX;
};