/**
 * Created by You on 2017/5/23.
 */
/**
 【极客学院版】
 LeetCode206:Reverse Linked List
 Reverse a singly linked list.
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
function ListNode(val) {
    this.val = val;
    this.next = null;
};

//非递归
var reverseList = function(head) {
    if(head==null || head.next==null){
        return head;
    }else{
        var pre = head;
        var p = head.next;
        var next = null;
        while(p!=null){
            var next = p.next;
            p.next=pre;
            pre=p;
            p=next;
        }
        head.next=null;
        return pre;
    }
};

//递归
function recursive(p){
    if(p.next==null){
        return p;
    }else{
        var next = p.next;
        var tail = recursive(next);
        next.next=p;
        return tail;
    }
}


var reverseListV2 = function(head) {
    if(head==null||head.next==null){
        return head;
    }else{
        var tail=recursive(head);
        head.next=null;
        return tail;
    }
};