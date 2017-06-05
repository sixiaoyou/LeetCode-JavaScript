/**
 * Created by You on 2017/6/5.
 */
/*
 【网友实现】:http://bookshadow.com/weblog/2015/12/03/leetcode-super-ugly-number/
 LeetCode313. Super Ugly Number
 Write a program to find the nth super ugly number.

 Super ugly numbers are positive numbers whose all prime factors are in the given prime list primes of size k. For example, [1, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32] is the sequence of the first 12 super ugly numbers given primes = [2, 7, 13, 19] of size 4.

 Note:
 (1) 1 is a super ugly number for any given primes.
 (2) The given numbers in primes are in ascending order.
 (3) 0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000.
 (4) The nth super ugly number is guaranteed to fit in a 32-bit signed integer.
 */

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
function findMin(nums){
    var n = nums[0];
    for(var i in nums){
        n = Math.min(n,nums[i]);
    }
    return n;
}

var nthSuperUglyNumber = function(n, primes) {
    var size = primes.length;
    var q = new Array();
    var indexs = new Array();
    var values = new Array();
    for(var i=0;i<n;i++){
        q[i] = 0;
    }
    for(var j = 0;j<size;j++){
        indexs[j]=0;
        values[j]=0;
    }

    q[0] = 1;
    for(var i=1;i<n;i++){
        for(var j=0;j<size;j++){
            values[j] = q[indexs[j]] * primes[j];
        }
        q[i] = findMin(values);
        for(var k = 0;k<values.length;k++){
            if(values[k]==q[i]){
                indexs[k]+=1;
            }
        }
    }
    return q[n-1];
};