/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  if(s.length === 0) return true
  
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  
  const queue = []
  for (let i = 0; i < s.length; i++) {
    if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
      queue.push(s[i])
    } else if(map[queue[queue.length - 1]] === s[i]){
      queue.pop()
    } else {
      return false
    }
  }

  return queue.length === 0
}
// @lc code=end

// Leetcode Stats
export default {
  runtime: {
    percent: 86.15,
    ms: 80,
  },
  memory: {
    percent: 61.73,
    mb: 40.1,
  }
}
