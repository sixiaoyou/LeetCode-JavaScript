/**
 *LeetCode 82:Remove Duplicates from Sorted List II
 * Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

 For example,
 Given 1->2->3->3->4->4->5, return 1->2->5.
 Given 1->1->1->2->3, return 2->3.
 * Created by You on 2017/5/25.
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
 * @return {ListNode}
 */
var deleteDuplicatesV1 = function(head) {
    if(head==null||head.next==null){
        return head;
    }else{
        var start = new ListNode(0);
        var pre = start
        var p = head;
        var next = null;
        start.next=head;
        while(p!=null&&p.next!=null){
            next=p.next;
            if(p.val==next.val){
                while(next!=null&&next.val==p.val){
                    next=next.next;
                }
                p=next;
                pre.next=next;
            }else{
                pre=p;
                p=p.next;
            }
        }
        return start.next;
    }

};

/**
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
var deleteDuplicatesV2 = function(head) {
    if(head==null||head.next==null){
        return head;
    }else{
        var start = new ListNode(0);
        var pre = start;
        var p = head;
        var flag = 0;
        start.next=head;
        while(p!=null){
            if(p.next==null){
                if(flag==1){
                    pre.next = p.next;
                }
                p=p.next;
                break;
            }
            if(p.val==p.next.val){
                flag=1;
            }else if(flag==1){
                pre.next=p.next;
                flag=0;
            }else{
                pre=pre.next;
            }
            p=p.next;
        }
        if(pre==start){
            return start.next;
        }
        return start.next;
    }
};


