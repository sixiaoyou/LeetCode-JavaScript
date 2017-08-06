/**
 * Created by You on 2017/8/6.
 */
/*
 '''
 LeetCode216. Combination Sum III
 Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.


 Example 1:

 Input: k = 3, n = 7

 Output:

 [[1,2,4]]

 Example 2:

 Input: k = 3, n = 9

 Output:

 [[1,2,6], [1,3,5], [2,3,4]]

 '''
 */

//#【网友实现】:http://bookshadow.com/weblog/2015/05/24/leetcode-combination-sum-iii/
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

var combinationSum3 = function(k, n) {
    var  ans = [];
    function search(start,cnt,sums,nums){
        if(cnt>k||sums>n){
            return;
        }else if(cnt == k && sums ==n){
            ans.push(nums.slice(0,nums.length));
            return;
        }
        for(var i = start + 1;i<=9;i++){
            nums.push(i)
            search(i,cnt+1,sums+i,nums);
            nums.pop()
        }

    }
    search(0,0,0,[]);
    return ans;

};