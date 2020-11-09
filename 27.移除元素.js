/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length;
    for(let i=len-1;i>=0;i--) {
        if(val==nums[i]) {
            nums.splice(i,1);
        }
    }
    return nums.length
};
// @lc code=end

