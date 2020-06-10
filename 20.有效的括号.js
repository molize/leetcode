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
    let tmp = s
    let arr = []
    if (tmp.length % 2) {
      return false
    }
    for (let i = 0; i < tmp.length; i++) {
      let word = tmp[i]
      switch (word) {
        case '{':
        case '(':
        case '[' :
          arr.push(word)
          break
        case '}':
          if (arr[arr.length - 1] !== '{') {
            return false
          } else {
            arr.pop()
            break
          }
        case ')':
          if (arr[arr.length - 1] !== '(') {
            return false
          } else {
            arr.pop()
            break
          }
        case ']':
          if (arr[arr.length - 1] !== '[') {
            return false
          } else {
            arr.pop()
            break
          }
      }
      
    }

    if (arr.length) {
      return false
    } else {
      return true
    }
};
// @lc code=end

