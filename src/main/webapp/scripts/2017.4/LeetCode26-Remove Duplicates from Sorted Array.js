/**
 * Created by Administrator on 2017/4/29.
 */
/*
 LeetCode26:Remove Duplicates from Sorted Array
 Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

 Do not allocate extra space for another array, you must do this in place with constant memory.

 For example,
 Given input array nums = [1,1,2],

 Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length<2){
        return nums.length;
    }
    var i=1,j=1;
    while(i<nums.length){
        if(nums[i]!=nums[j-1]){
            nums[j]=nums[i];
            j+=1;

        }
        i+=1;
    }
    return j;

};