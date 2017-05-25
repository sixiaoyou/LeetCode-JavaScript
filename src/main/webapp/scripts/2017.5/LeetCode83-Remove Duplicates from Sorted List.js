/**
 * Created by You on 2017/5/25.
 */

/*
 LeetCode83:Remove Duplicates from Sorted List
 *Given a sorted linked list, delete all duplicates such that each element appear only once.

 For example,
 Given 1->1->2, return 1->2.
 Given 1->1->2->3->3, return 1->2->3.
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
var deleteDuplicates = function(head) {
    if(head==null||head.next==null){
        return head;
    }else{
        var p=head;
        while(p!=null&&p.next!=null){
            if(p.val==p.next.val){
                p.next=p.next.next;
            }else{
                p=p.next;
            }
        }
        return head;
    }
};