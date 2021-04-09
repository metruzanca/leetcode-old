/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
 */

// Definition for singly-linked list, given by leetcode
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// null -> 1 -> 2 -> null
// null -> 2 -> 1 -> null

// @lc code=start
function reverseList(head: ListNode | null): ListNode | null {
  let prev = null
  while(head !== null){    
    const next = head.next
    head.next = prev // 1 -> null
    prev = head 
    head = next
  }
  return prev
};
// @lc code=end

//quokka.js
const list = new ListNode(1, new ListNode(2, null))
console.log(reverseList(list));

// Leetcode Stats
export default {
  runtime: {
    percent: 95.09,
    ms: 80,
  },
  memory: {
    percent: 83.41,
    mb: 40.6,
  }
}