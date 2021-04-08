/*
 * @lc app=leetcode id=412 lang=typescript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
function fizzBuzz(n: number) {
  const arr = []
  for (let i = 1; i <= n; i++) {
    if(i % 15 === 0) {
      arr.push("FizzBuzz")
    } else if (i % 3 === 0) {
      arr.push("Fizz")
    } else if (i % 5 === 0) {
      arr.push("Buzz")
    } else {
      arr.push(i.toString())
    }
  }
  return arr 
};
// @lc code=end