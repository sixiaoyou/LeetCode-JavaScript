/**
 * Created by You on 2017/5/26.
 */
/*
 LeetCode 61. Rotate List
 Given a list, rotate the list to the right by k places, where k is non-negative.

 For example:
 Given 1->2->3->4->5->NULL and k = 2,
 return 4->5->1->2->3->NULL.
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function getLength(head){
    var p = head;
    var n = 0;
    while (p != null) {
        n++;
        p = p.next;
    }
    return n;
}


/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
//【极客学院版】
var rotateRight = function(head, k) {
    if (head == null || head.next == null || k == 0) {
        return head;
    } else {
        var n = getLength(head);
        if (k >= n) {
            k %= n;
        }
        if(k==0){
            return head;
        }
        var index = 1;
        var pre = head;
        while (index < n - k) {
            pre = pre.next;
            index++;
        }
        var start = pre.next;
        var last = start;
        while (last.next != null) {
            last = last.next;
        }
        pre.next = null;
        last.next = head;
        return start;
    }
};