/**
 * Created by You on 2017/7/17.
 */
/*
'''
LeetCode581. Shortest Unsorted Continuous Subarray
Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

    You need to find the shortest such subarray and output its length.

    Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
    Note:
Then length of the input array is in range [1, 10,000].
    The input array may contain duplicates, so ascending order here means <=.

'''
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function sortNumber(o1,o2){
    return o1 - o2
}



var findUnsortedSubarray = function(nums) {
    var start=-1;
    var end = -1;
    var copyNums = nums.slice(0);
    copyNums.sort(sortNumber);
    for(var i=0;i<nums.length;i++){
        if(nums[i]!=copyNums[i]){
            if(start == -1){
                start = i;
            }
            end = i;
        }
    }
    return (start==end)?0:end-start+1;
};