/**
 * Created by You on 2017/5/28.
 */
/**
 【极客学院版】
 LeetCode143. Reorder List
 Given a singly linked list L: L0→L1→…→Ln-1→Ln,
 reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

 You must do this in-place without altering the nodes' values.

 For example,
 Given {1,2,3,4}, reorder it to {1,4,2,3}.
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(head!=null&&head.next!=null){
        var n = getLength(head);
        var half = Math.floor(n/2);
        var p = head;
        if (n%2!=0){
            half++;
        }
        for(var i=1;i<half;i++){
            p=p.next;
        }
        head=reorderProcess(head,reverseListNode(p));
    }


function getLength(head){
    var n=0;
    while (head!=null){
        head = head.next;
        n++;
    }
    return n;
}

function reverseListNode(p){
    var p1 = p.next;
    var p2 = p.next.next;
    while(p2!=null){
        var next = p2.next;
        p2.next = p1;
        p1 = p2;
        p2 = next;
    }
    p.next.next = null;
    p.next = null;
    return p1;
}

function reorderProcess(head,p){
    var start = new ListNode(0);
    var first = head;
    start.next = head;
    var next = null;
    var flag = true;
    while(p!=null){
        if(flag){
            next = first.next;
            first.next = p;
            first = next;
        }else{
            next = p.next;
            p.next = first;
            p = next;
        }
        flag=!flag;
    }
    return head;
}



};