/**
 * Created by You on 2017/5/26.
 *LeetCode 92:Reverse Linked List II
 * Reverse a linked list from position m to n. Do it in-place and in one-pass.

 For example:
 Given 1->2->3->4->5->NULL, m = 2 and n = 4,

 return 1->4->3->2->5->NULL.

 Note:
 Given m, n satisfy the following condition:
 1 ≤ m ≤ n ≤ length of list.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    if (head == null || head.next == null) {
        return head;
    } else if (m == n) {
        return head;
    } else {
        var start = new ListNode(0);
        var first = start;
        start.next = head;
        var k = 1;
        while (k < m) {
            first = first.next;
            k++;
        }
        var pre = first.next;
        var p = pre.next;
        var top = first.next;
        var next =null;
        while (k < n) {
            next = p.next;
            p.next = pre;
            pre = p;
            p = next;
            k++;
        }
        top.next = p;
        first.next = pre;
        return start.next;
    }
};