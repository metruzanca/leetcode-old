/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
// JS numbers are int64, so I'm just gonan save the max and min for int32
const MAX = 2147483647
const MIN = -2147483648
function reverse(x: number): number {
  let isNegative = x < 0
  const str = isNegative
    ? x.toString().substr(1).split('').reverse().join("")
    : x.toString().split('').reverse().join("")
  // If javascript didn't have int64, you'd have a try catch or something here.
  const value = parseInt(str)
  if(value > MAX || value < MIN) {
    return 0
  }
  return isNegative ? -1 * value : value
};
// @lc code=end

// Leetcode Stats
export default {
  runtime: {
    percent: 23.8,
    ms: 112,
  },
  memory: {
    percent: 83.07,
    mb: 40.4,
  }
}