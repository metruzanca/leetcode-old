/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let prefix = ''
  if(strs.length === 0) return prefix
  for (let i = 0; i < strs[0].length; i++) {
    prefix = strs[0].substr(0, i + 1)
    const every = strs.every(str => str.startsWith(prefix))
    if(!every){
      return prefix.substr(0, i)
    }
  }

  return prefix
};
// @lc code=end

// Leetcode Stats
export default {
  runtime: {
    percent: 69.73,
    ms: 88,
  },
  memory: {
    percent: 93.53,
    mb: 40.1,
  }
}