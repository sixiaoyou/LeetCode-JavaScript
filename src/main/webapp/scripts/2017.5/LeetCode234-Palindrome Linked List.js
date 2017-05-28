/**
 * Created by You on 2017/5/28.
 */
/*
 LeetCode234-Palindrome Linked List
 Given a singly linked list, determine if it is a palindrome.

 Follow up:
 Could you do it in O(n) time and O(1) space?
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



function getLength(head){
    var n = 0;
    while(head!=null){
        head=head.next;
        n++;
    }
    return n;
}

function judgeProcess(head,p){
    var p1 = p.next;
    var p2 = p.next.next;
    while(p2!=null){
        var next = p2.next;
        p2.next = p1;
        p1 = p2;
        p2 = next;
    }
    p.next.next=null
    p.next = p1
    while(p1!=null){
        if(head.val!=p1.val){
            return false;
        }
        p1=p1.next;
        head = head.next;
    }
    return true;
}


var isPalindrome = function(head) {
    if(head==null||head.next==null){
        return true;
    }
    var count = 0;
    var n = getLength(head);
    var pre = head;
    var p = head.next;
    if(n%2==0){
        if(n==2){
            if(head.val!=head.next.val){
                return false;
            }
            return true;
        }
        else{
            while(2+count!=Math.floor(n/2)){
                p=p.next;
                count++;
            }
        }
    }else{
        while(count!=Math.floor(n/2)-1){
            p=p.next;
            count++;
        }
    }
    return judgeProcess(head,p);
};
