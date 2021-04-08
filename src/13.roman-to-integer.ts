/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  let value = 0
  for (let i = 0; i < s.length; i++) {
    const current = romanToDec(s[i])
    const next = romanToDec(s[i+1])
    if(next && current < next){
      value += (next - current)
      i++ // these two values represent 1 number, so skip extra position
    } else {
      value += current
    }
  }
  return value
};

function romanToDec(key: string): number{
  switch(key){
    case "I": return 1
    case "V": return 5
    case "X": return 10
    case "L": return 50
    case "C": return 100
    case "D": return 500
    case "M": return 1000
    // default: return // Impossible, due to leetcode constraints
  }
}
// @lc code=end

// Leetcode Stats
export default {
  runtime: {
    percent: 57.6,
    ms: 172,
  },
  memory: {
    percent: 99.14,
    mb: 45.1,
  }
}