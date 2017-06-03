/**
 * Created by You on 2017/6/3.
 */
/*
【极客学院版】
LeetCode141. Linked List Cycle
Given a linked list, determine if it has a cycle in it.

    Follow up:
    Can you solve it without using extra space?
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head==null){
        return false;
    }else{
        var slow = head;
        var fast = head;
        while(fast!=null && fast.next!=null){
            slow = slow.next;
            fast = fast.next;
            fast = fast.next;
            if(slow == fast){
                return true;
            }
        }
        return false;
    }


};