/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = 0;
    nums.forEach(item=>{
        sum = Math.max(sum+item,item);
        max = Math.max(sum,max);
    })
    // let len = nums.length;
    // for(let i=0;i<len;i++) {
    //     let sum = 0;
    //     for(let j=i;j<len;j++) {
    //         sum += nums[j];
    //         if(sum > max) {
    //             max = sum;
    //         }
    //     }
    // }
    return max;    
};
// @lc code=end

