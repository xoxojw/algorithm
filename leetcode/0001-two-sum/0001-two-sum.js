/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashTable = {};

    for (let i=0; i<nums.length; i++) {
        const val = target - nums[i];

        if (hashTable.hasOwnProperty(val)) {
            return [hashTable[val], i]
        }

        hashTable[nums[i]] = i;
    }
}