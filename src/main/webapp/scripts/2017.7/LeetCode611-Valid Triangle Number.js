/**
 * Created by You on 2017/7/12.
 */
/*
 '''
 LeetCode611. Valid Triangle Number
 Given an array consists of non-negative integers, your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

 Example 1:
 Input: [2,2,3,4]
 Output: 3
 Explanation:
 Valid combinations are:
 2,3,4 (using the first 2)
 2,3,4 (using the second 2)
 2,2,3
 Note:
 The length of the given array won't exceed 1000.
 The integers in the given array are in the range of [0, 1000].
 '''
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function sortNumber(o1,o2){
    return o1 - o2;
}
var triangleNumberV1 = function(nums) {
    nums.sort(sortNumber)
    var size = nums.length;
    var ans = 0;
    for (var i = 0; i < size - 2; i++) {
        if (nums[i] == 0)
            continue;
        var k = i + 2;
        for (var j = i + 1; j < size - 1; j++) {
            while (k < size && nums[k] < nums[i] + nums[j])
                k++;
            ans += k - j - 1;
        }
    }
    return ans;
};

function binarySearh(nums,start,target){
    var end = nums.length - 1;
    while (start <= end) {
        var mid = (start + end) / 2;
        if (nums[mid] >= target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
}

var triangleNumberV2 = function(nums) {
    nums.sort(sortNumber)
    var size = nums.length;
    var ans = 0;
    for (var i = 0; i < size - 2; i++) {
        if (nums[i] == 0)
            continue;
        var k = i + 2;
        for (var j = i + 1; j < size - 1; j++) {
            while (k < size && nums[k] < nums[i] + nums[j])
                k++;
            ans += k - j - 1;
        }
    }
    return ans;
};

var triangleNumberV3 = function(nums) {
    nums.sort(sortNumber);
    var size = nums.length;
    var count = 0;
    for (var i = 0; i < size - 2; i++) {
        for (var j = i + 1; j < size - 1; j++) {
            for (var k = j + 1; k < size; k++) {
                if (nums[i] + nums[j] > nums[k]) {
                    count += 1;
                }
            }
        }
    }
    return count;
};