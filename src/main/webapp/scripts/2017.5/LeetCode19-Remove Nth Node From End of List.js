/**
 * Created by You on 2017/5/23.
 */
/*
 LeetCode19:Remove Nth Node From End of List
 Given a linked list, remove the nth node from the end of list and return its head.

 For example,

 Given linked list: 1->2->3->4->5, and n = 2.

 After removing the second node from the end, the linked list becomes 1->2->3->5.
 Note:
 Given n will always be valid.
 Try to do this in one pass
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
 * @param {number} n
 * @return {ListNode}
 */
//One Pass【极客学院版】
var removeNthFromEndV1 = function(head, n) {
    var start = new ListNode(0);
    var slow = start;
    var fast = start;
    slow.next=head;
    for (var i = 1; i <= n+1; i++) {
        fast = fast.next;
    }
    while (fast != null) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return start.next;
};

//【网友实现】:https://discuss.leetcode.com/topic/7031/simple-java-solution-in-one-pass
var removeNthFromEndV2 = function(head, n) {
    if (head == null) {
        return head;
    } else {
        n++;
        var pre = head;
        var p2 = head;
        for (var i = 1; i <= n; i++) {
            if (p2 == null) {
                return head.next;
            }
            p2 = p2.next;
        }
        while (p2 != null) {
            p2 = p2.next;
            pre = pre.next;
        }
        pre.next = pre.next.next;
        return head;
    }

};


//非One Pass【极客学院版】
function getLength(head){
    var m=0
    while(head!=null){
        m++;
        head=head.next;
    }
    return m;
}

var removeNthFromEndV3 = function(head, n) {
    var m = getLength(head);
    if(head==null){
        return head;
    }else if(head.next==null||m==n){
        head=head.next;
        return head;
    }else{
        var p=head;
        for(var i=1;i<=m-n-1;i++){
            p=p.next;
        }
        p.next=p.next.next;
        return head;
    }



};