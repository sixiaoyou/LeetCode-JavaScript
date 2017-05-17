/*
【网友实现】:http://bookshadow.com/weblog/2016/06/13/leetcode-count-numbers-with-unique-digits/
 LeetCode357:Count Numbers with Unique Digit
 Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.

 Example:
 Given n = 2, return 91. (The answer should be the total numbers in the range of 0 ≤ x < 100, excluding [11,22,33,44,55,66,77,88,99])

 Credits:
 Special thanks to @memoryless for adding this problem and creating all test cases.
 */
/**
 * Created by You on 2017/5/17.
 */
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    var sum=1;var count=9;var mul=9;
    while(n!=0){
        sum+=mul;
        mul*=count--
        n-=1;
    }
    return sum;
};