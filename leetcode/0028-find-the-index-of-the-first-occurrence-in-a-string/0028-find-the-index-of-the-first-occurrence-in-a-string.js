/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let h = 0;
    let n = 0;

    while (h < haystack.length) {
        if (haystack[h] === needle[n]) {
            h++;
            n++;
            if (n === needle.length) return h - needle.length;
        } else {
            h = h - n + 1;
            n = 0;
        }
    }

    return -1;
};