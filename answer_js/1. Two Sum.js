/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * Time complexity : O(n^2)
 * Space complexity : O(1)
 * @param nums
 * @param target
 * @returns {[null,null]}
 */
var twoSum = function (nums, target) {

    let len = nums.length;
    for (let i = 0; i < len; i++) {
        let temp = nums[i];
        for (let j = i + 1; j < len; j++) {
            let temp1 = nums[j];
            if (temp + temp1 == target) {
                return [i, j];
            }
        }
    }

};

/**
 * Time complexity : O(n)
 * Space complexity : O(n)
 * @param nums
 * @param target
 * @returns {[null,null]}
 */
var twoSum = function (nums, target) {
    let amap = {};

    for (let i = 0, len = nums.length; i < len; i++) {
        let temp = target - nums[i];
        if (amap[nums[i]] !== undefined) {
            return [amap[nums[i]], i];
        }
        amap[temp] = i;
    }

}


console.log(twoSum([3, 2, 4], 6));