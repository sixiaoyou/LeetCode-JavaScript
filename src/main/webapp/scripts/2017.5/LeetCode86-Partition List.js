/**
 * Created by You on 2017/5/28.
 */
/*
【极客学院版】
 LeetCode86. Partition List
 Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

 You should preserve the original relative order of the nodes in each of the two partitions.

 For example,
 Given 1->4->3->2->5->2 and x = 3,
 return 1->2->2->4->3->5.
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var left = new ListNode(0);
    var right = new ListNode(0);
    var p1 = left;
    var p2 = right;
    while(head!=null){
        if(head.val<x){
            p1.next = new ListNode(head.val);
            p1 = p1.next;
        }else{
            p2.next = new ListNode(head.val);
            p2 = p2.next;
        }
        head = head.next;
    }
    p1.next =right.next;
    return left.next;

};