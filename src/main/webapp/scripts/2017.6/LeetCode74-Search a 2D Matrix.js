/**
 * Created by You on 2017/6/6.
 */
/*
 【极客学院版】
 LeetCode74. Search a 2D Matrix
 Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

 Integers in each row are sorted from left to right.
 The first integer of each row is greater than the last integer of the previous row.
 For example,

 Consider the following matrix:

 [
 [1,   3,  5,  7],
 [10, 11, 16, 20],
 [23, 30, 34, 50]
 ]
 Given target = 3, return true.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function searchRow(matrix,m,n,target){
    var start = 0;
    var end = m - 1;
    while(start<=end){
        var mid = Math.floor((start+end)/2);
        if(target == matrix[mid][n-1]){
            return mid;
        }else if(target < matrix[mid][n-1]){
            end-=1;
        }else{
            start+=1;
        }
    }
    return start;
}

function searchCol(matrix,row,n,target){
    var start = 0;
    var end = n - 1;
    while(start<=end){
        var mid = Math.floor((start+end)/2);
        if(target == matrix[row][mid]){
            return true;
        }else if(target < matrix[row][mid]){
            end-=1;
        }else{
            start+=1;
        }
    }
    return false;
}

var searchMatrix = function(matrix, target) {
    if(matrix == null || matrix.length == 0 || matrix[0].length == 0){
        return false;
    }
    var m = matrix.length;
    var n = matrix[0].length;
    var row = searchRow(matrix,m,n,target);
    if(row < 0 || row >= m){
        return false;
    }
    return searchCol(matrix,row,n,target);
};