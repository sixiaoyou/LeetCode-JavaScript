/**
 * Created by You on 2017/6/5.
 */
/*
 '''
 LeetCode 263:Ugly Number
 Write a program to check whether a given number is an ugly number.

 Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

 Note that 1 is typically treated as an ugly number.
 '''
 */
/**
 * @param {number} num
 * @return {boolean}
 */

//网友实现:http://bookshadow.com/weblog/2015/08/19/leetcode-ugly-number/
var isUgly = function(num) {
    if(num<1){
        return false;
    }else{
        var nums = [2,3,5];
        for(var i in nums){
            while(num%nums[i]==0){
                num/=nums[i];
            }
        }
        return num==1;
    }
};