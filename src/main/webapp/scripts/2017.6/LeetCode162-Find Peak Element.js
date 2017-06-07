/**
 * Created by You on 2017/6/7.
 */
/*
【极客学院版】
 LeetCode 162:Find Peak Element
 A peak element is an element that is greater than its neighbors.

 Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

 The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

 You may imagine that num[-1] = num[n] = -∞.

 For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    var n = nums.length;
    if (n == 1){
        return 0;
    }
    var start = 0;
    var end = n - 1;
    while(start < end){
        var mid = Math.floor((start + end)/2);
        if(nums[mid] > nums[mid+1]){
            end = mid;
        }else{
            start = mid + 1;
        }

    }
    return start;
};
