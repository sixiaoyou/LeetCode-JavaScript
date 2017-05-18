/*
【网友实现】:http://bookshadow.com/weblog/2017/02/12/leetcode-base-7/
 LeetCode504:Base 7
 Given an integer, return its base 7 string representation.

 Example 1:
 Input: 100
 Output: "202"
 Example 2:
 Input: -7
 Output: "-10"
 Note: The input will be in range of [-1e7, 1e7].
 */
/**
 * Created by You on 2017/5/18.
 */
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    var ans='';
    var n=Math.abs(num);
    if(num==0){
        return "0";
    }
    while(n){
        ans=n%7+ans;
        n=Math.floor(n/7);
    }
    return num>0?ans:'-'+ans;
};