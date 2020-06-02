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

    if(s.length == 0) {
        result = true;
        return result
    }
    if(s.length%2 != 0) {
        result = false;
        return result
    }
    var currStr = s.substr(0,1);
    var lastStr = s.substr(s.length-1,1);
    
    if(!arr1.includes(currStr)) {
        return result
    }

    var index = arr1.findIndex(str=> {
        return str == currStr;
    });
    var index1 = arr2.findIndex(str=> {
        return str == lastStr;
    });

    if(index == -1 || index1 == -1 ) {
        return result
    }

    if(index == index1) {
        var startIndex = 0;
        var endIndex =  s.length-1;

        while (startIndex < endIndex) {
            var _index = arr1.findIndex(str=> {
                return str == s.substr(startIndex,1)
            });
            var _index1 = arr2.findIndex(str=> {
                return str == s.substr(endIndex,1)
            });

            if(_index == -1 || _index1 == -1 ) {
                result = false;
                break;
            }
            if(_index == _index1) {
                result = true;
            } else {
                result = false;
                break;
            }
            startIndex++;
            endIndex--;
        }
    } else {
        var checkStr = (start)=> {
            var num1 = start || 0;
            if(num1 < s.length-1) {
                var _index = arr1.findIndex(str=> {
                    return str == s.substr(num1,1)
                });
                var _index1 = arr2.findIndex(str=> {
                    console.log(str,s.substr(num1+1,1))
                    return str == s.substr(num1+1,1)
                });

                if(_index != -1 && _index1 != -1 ) {
                    if(_index==_index1) {
                        result = true;
                        checkStr(num1+2);
                    } else {
                        result = false;
                    }
                } else {
                    result = false;
                }
            }
        }
        checkStr();
    }
    return result
    
};
// @lc code=end

