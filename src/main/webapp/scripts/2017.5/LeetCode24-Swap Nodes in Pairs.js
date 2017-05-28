/**
 * Created by You on 2017/5/28.
 */
/**
 * 【极客学院版】
 LeetCode 24. Swap Nodes in Pairs
 Given a linked list, swap every two adjacent nodes and return its head.

 For example,
 Given 1->2->3->4, you should return the list as 2->1->4->3.

 Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
 */
/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head==null || head.next == null){
        return head;
    }
    var start = new ListNode(0);
    var zero = start;
    var pre = head;
    var p = pre.next;
    var next = null;
    start.next = null;
    while(pre!=null&&p!=null){
        next = p.next;
        p.next = pre;
        pre.next = next;
        zero.next = p;
        if(next==null){
            break;
        }else{
            zero = pre;
            pre = pre.next;
            p = pre.next;
        }

    }
    return start.next;
};
