/**
 * Created by You on 2017/5/25.
 */

/**
 *LeetCode 203:Remove Linked List Elements
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

var removeElementsV1 = function(head, val) {
    var start=new ListNode(0);
    var pre=start;
    var p=head;
    start.next=head;
    while(p!=null){
        if(p.val==val){
            pre.next=p.next;
            p=p.next;
        }else{
            pre=pre.next;
            p=p.next;
        }
    }
    return start.next;
};

var removeElementsV2 = function(head, val) {
    var start=new ListNode(0);
    var p=start;
    start.next=head;
    while(p!=null && p.next!=null){
        if(p.next.val==val){
            p.next=p.next.next;
        }else{
            p=p.next;
        }
    }
    return start.next;
};

