/**
 * Created by You on 2017/6/6.
 */
/*
【极客学院版】
LeetCode 35. Search Insert Position
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

    You may assume no duplicates in the array.

    Here are few examples.
    [1,3,5,6], 5 → 2
    [1,3,5,6], 2 → 1
    [1,3,5,6], 7 → 4
    [1,3,5,6], 0 → 0
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums==null||nums.length==0){
        return 0;
    }
    var start = 0;
    var end = nums.length - 1;
    while(start<=end){
        var mid = Math.floor((start+end)/2);
        if(target==nums[mid]){
            return mid;
        }else if(target < nums[mid]){
            end -=1;
        }else{
            start +=1;
        }
    }
    return start;

};