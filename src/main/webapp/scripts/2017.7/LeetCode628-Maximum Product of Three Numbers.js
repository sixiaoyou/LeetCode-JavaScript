/**
 * Created by You on 2017/7/8.
 */
/**
 * '''
 LeetCode628. Maximum Product of Three Numbers
 Given an integer array, find three numbers whose product is maximum and output the maximum product.

 Example 1:
 Input: [1,2,3]
 Output: 6
 Example 2:
 Input: [1,2,3,4]
 Output: 24
 Note:
 The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
 Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.
 '''
 * @param {number[]} nums
 * @return {number}
 */


function sortNumber(o1,o2){
    return o1-o2;
}


var maximumProduct = function(nums) {
    var length = nums.length;
    nums.sort(sortNumber)
    return Math.max(nums[length-1]*nums[length-2]*nums[length-3],nums[0]*nums[1]*nums[nums.length-1]);
};