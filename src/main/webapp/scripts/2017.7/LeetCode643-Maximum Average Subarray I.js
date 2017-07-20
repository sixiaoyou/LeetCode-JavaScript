/**
 * Created by You on 2017/7/20.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*
 '''
 LeetCode643. Maximum Average Subarray I
 Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

 Example 1:
 Input: [1,12,-5,-6,50,3], k = 4
 Output: 12.75
 Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
 Note:
 1 <= k <= n <= 30,000.
 Elements of the given array will be in the range [-10,000, 10,000].
 '''
 */
function getSum(nums,start,end){
    var sum = 0;
    for(var i=start;i<end;i++){
        sum+=nums[i];
    }
    return sum;
}

var findMaxAverage = function(nums, k) {
    var list = [0,0];
    var length = nums.length;
    var sum = 0, start = 0,end = k;
    while(end<=length){
        if(start!=0){
            sum+=nums[end-1]-nums[start-1];
            if(sum>list[0]){
                list[0] = sum;
                list[1] = start;
            }
        }
        start+=1;
        end+=1;
    }
    return getSum(nums,list[1],list[1]+k)/k;
};