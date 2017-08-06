/**
 * Created by You on 2017/8/7.
 */
/*
 '''
 Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

 For example, given array S = {-1 2 1 -4}, and target = 1.

 The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 '''

 #【网友实现】:https://discuss.leetcode.com/topic/9815/python-o-n-2-solution
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function sortNumber(o1,o2){
    return o1 - o2;
}

var threeSumClosest = function(nums, target) {
    nums.sort(sortNumber);
    var res = nums[0]+nums[1]+nums[2];
    for(var i = 0;i<nums.length - 2;i++){
        var j = i+1,k = nums.length - 1;
        while(j<k){
            var sum  = nums[i] + nums[j] + nums[k];
            if(sum == target){
                return sum;
            }else if(Math.abs(sum - target) < Math.abs(res - target)){
                res = sum;
            }
            if(sum < target){
                j+=1;
            }
            if(sum > target){
                k-=1;
            }
        }
    }
    return res;
};