/**
 * Created by You on 2017/5/13.
 */

/*
 网友实现：https://discuss.leetcode.com/topic/87851/java-concise-o-nm-time
 LeetCode566:Reshape the Matrix
 In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

 You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

 The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

 If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

 Example 1:
 Input:
 nums =
 [[1,2],
 [3,4]]
 r = 1, c = 4
 Output:
 [[1,2,3,4]]
 Explanation:
 The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.
 Example 2:
 Input:
 nums =
 [[1,2],
 [3,4]]
 r = 2, c = 4
 Output:
 [[1,2],
 [3,4]]
 Explanation:
 There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.
 Note:
 The height and width of the given matrix is in range [1, 100].
 The given r and c are all positive.
 */

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
    var m = nums.length;
    var n = nums[0].length;
    if(r*c!=m*n){
        return nums;
    }
    var nums1 = new Array();
    for(var i=0;i<r;i++) {
        nums1[i] = new Array();
        for (var j = 0; j < c; j++) {
            nums1[i][j] = 1;
        }
    }
    for(var k=0;k<r*c;k++){
        nums1[Math.floor(k/c)][k%c]=nums[Math.floor(k/n)][k%n]
    }
    return nums1;
};