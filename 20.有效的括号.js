/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var result = false;
    var arr1 = ['(','{','[',];
    var arr2 = [')','}',']'];

    if(s.length == 0 || s.length%2 != 0) {
        return result
    }
    var currStr = s.substr(0,1);
    
    if(!arr1.includes(currStr)) {
        return result
    }

    var check = (start,end) => {
        var startIndex = start || 0;
        var endIndex = end || s.length-1;
        if(startIndex < endIndex) {
            var _index = arr1.findIndex(str=> {
                return str == s.substr(startIndex,1)
            });
            var _index1 = arr2.findIndex(str=> {
                return str == s.substr(endIndex,1)
            });

            if(_index == -1 || _index1 == -1 ) {
                result = false;
                return result
            }

            var fn1 = () => {
                if(_index == _index1) {
                    result = true;
                    check(startIndex+1,endIndex-1)();
                } else {
                    result = false;
                }
            }
        }
    }
};
// @lc code=end

