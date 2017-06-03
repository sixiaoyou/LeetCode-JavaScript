/*
【极客学院版】
 LeetCode287. Find the Duplicate Number
 Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

 Note:
 You must not modify the array (assume the array is read only).
 You must use only constant, O(1) extra space.
 Your runtime complexity should be less than O(n2).
 There is only one duplicate number in the array, but it could be repeated more than once.
 */

/**
 * Created by You on 2017/6/3.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var n = nums.length;
    var slow = n-1;
    var fast = n-1;
    while(true){
        slow = nums[slow]-1;
        fast = nums[fast]-1;
        fast = nums[fast]-1;
        if(fast==slow){
            break;
        }
    }
    slow = n - 1;
    while(slow!=fast){
        slow = nums[slow] - 1;
        fast = nums[fast] - 1;
    }
    return slow+1;
};