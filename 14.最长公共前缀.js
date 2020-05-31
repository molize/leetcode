/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (37.23%)
 * Likes:    1008
 * Dislikes: 0
 * Total Accepted:    251.8K
 * Total Submissions: 675.7K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(Array.isArray(strs)) {
        var str = '';
        var len = strs.length;

        if(len == 0) {
            return str
        }
        if(len == 1) {
            return strs[0]
        }

        var findPreFix = (str1,str2)=> {
            var hasStrPreFix = ()=> {
                if(str && str != str1.slice(0, str.length)) {
                    str = str.slice(0,str.length-1);
                    hasStrPreFix();
                } 
            }
            if(str) {
                hasStrPreFix();
                return
            }
            
            var start = 0;
            var end = 0;
            if(str) {
                end = str.length;
            } else {
                if(str1.length > str2.length) {
                    end = str2.length;
                } else {
                    end = str1.length;
                }
            }
            

            var doCheck =  () => {
                if(start <= end) {
                    if(str1.slice(0,start+1) == str2.slice(0,start+1)) { 
                        str = str1.slice(0,start+1);
                        start++;
                        doCheck();
                    }
                }
            };
            doCheck();
        }

        for(var i=0;i<len;i++) {
            if(i == 0) continue;
            if(strs[i].slice(0,1) != strs[i-1].slice(0,1)) {
                str = '';
                break;
            } 
            findPreFix(strs[i],strs[i-1]);
        }
        return str;
    }
};
// @lc code=end

