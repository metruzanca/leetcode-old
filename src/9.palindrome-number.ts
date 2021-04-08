/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start

// function isPalindrome(x: number): boolean {
//   const str = x.toString()
//   for (let i = 0; i < Math.floor(str.length / 2); i++) {
//     if(str[i] !== str[str.length - 1 - i]) return false 
//   }
//   return true
// };
// export default {
//   runtime: {
//     percent: 65.02,
//     ms: 220,
//   },
//   memory: {
//     percent: 82.97,
//     mb: 49,
//   }
// }


//Follow up: Could you solve it without converting the integer to a string?
function isPalindrome(x: number): boolean {
  if(x < 0) return false
  const len = Math.floor(Math.log(x)/Math.log(10)) + 1
  for (let i = 0; i < len / 2; i++) {
    const leftVal = getDigitAtPosition(x, i)
    const rightVal = getDigitAtPosition(x, len - 1 - i)
    if(leftVal !== rightVal) return false 
  }
  return true
};

function getDigitAtPosition(value: number, position: number){
  const length = Math.floor(Math.log(value)/Math.log(10)) - position
  const mask = Math.floor(value / 10 ** length);
  return mask - Math.floor(mask / 10) * 10;
}

// @lc code=end

// Leetcode Stats
export default {
  runtime: {
    percent: 43.04,
    ms: 228,
  },
  memory: {
    percent: 99.82,
    mb: 48.1,
  }
}