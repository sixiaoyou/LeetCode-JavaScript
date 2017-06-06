/**
 * Created by You on 2017/6/6.
 */
/*
LeetCode 34:Search for a Range
Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

    Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

    For example,
    Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function searchStart(nums,target){
    if(nums==null||nums.length==0){
        return 0;
    }
    var start = 0;
    var end = nums.length - 1;
    while(start<=end){
        var mid = Math.floor((start+end)/2);
        if(target==nums[mid]){
            if(mid==0 || nums[mid-1]!=target){
                return mid;
            }else{
                end-=1;
            }

        }else if(target < nums[mid]){
            end -=1;
        }else{
            start +=1;
        }
    }
    return -1;
}


function searchEnd(nums,target){
    if(nums==null||nums.length==0){
        return 0;
    }
    var start = 0;
    var end = nums.length - 1;
    while(start<=end){
        var mid = Math.floor((start+end)/2);
        if(target==nums[mid]){
            if(mid==nums.length-1 || nums[mid]!=nums[mid+1]){
                return mid;
            }else{
                start+=1;
            }

        }else if(target < nums[mid]){
            end -=1;
        }else{
            start +=1;
        }
    }
    return -1;
}


var searchRange = function(nums, target) {
    var result = [-1,-1];
    if(nums==null||nums.length==0){
        return result;
    }
    var start = searchStart(nums,target);
    if(start==-1){
        return result;
    }else{
        var end = searchEnd(nums,target);
        result[0] = start;
        result[1] = end;
        return result;
    }
};