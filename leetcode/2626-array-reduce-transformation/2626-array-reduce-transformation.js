/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result = init;

    function helper(helperInput) {
        // 종료 조건
        if (helperInput.length === 0) return;
        
        // 재귀호출
        result = fn(result, helperInput[0]);
        helper(helperInput.slice(1));
    }

    helper(nums);

    return result;
};