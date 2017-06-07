/**
 * Created by You on 2017/6/7.
 */
/*
【极客学院版】
 '''
 LeetCode 153:Find Minimum in Rotated Sorted Array
 Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

 (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

 Find the minimum element.

 You may assume no duplicate exists in the array.
 '''
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var start = 0;
    var end = nums.length - 1;
    while(start < end){

        if(nums[start] < nums[end]){
            return nums[start];
        }
        if(end - start == 1){
            return nums[end];
        }
        var mid = Math.floor((start + end)/2);
        if(nums[mid]>nums[start]){
            start = mid;
        }else if(nums[mid] < nums[end]){
            end = mid;
        }
    }
    return nums[0];
};