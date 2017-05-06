/**
 * Created by Administrator on 2017/4/29.
 */
/**
 *
 * 【九章算法实现】:http://www.jiuzhang.com/solutions/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (l1 == null && l2 == null) {
        return null;
    }
    var head = new ListNode(0);
    var point = head;
    var carry = 0;
    while (l1 != null && l2 != null) {
        var sum = carry + l1.val + l2.val;
        point.next = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);
        l1 = l1.next;
        l2 = l2.next;
        point = point.next;
    }

    while (l1 != null) {
        var sum = carry + l1.val;
        point.next = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);
        l1 = l1.next;
        point = point.next;
    }

    while (l2 != null) {
        var sum = carry + l2.val;
        point.next = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);
        l2 = l2.next;
        point = point.next;
    }

    if (carry != 0) {
        point.next = new ListNode(carry);
    }
    return head.next;
};