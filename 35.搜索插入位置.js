/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let n = nums.length;
    let left = 0,right= n-1, ans=n;

    while(left <= right) {
        let mid = ((right-left)>>1)+left;
        if(nums[mid] >= target) {
            ans = mid;
            right = mid -1;
        } else {
            left = mid + 1;
        } 
    }
    return ans
};
// @lc code=end

