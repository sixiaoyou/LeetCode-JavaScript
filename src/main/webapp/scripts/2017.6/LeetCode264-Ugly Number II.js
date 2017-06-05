/**
 * Created by You on 2017/6/5.
 */
/**
 * @param {number} n
 * @return {number}
 */
/*
 【极客学院版】
 LeetCode264. Ugly Number II
 Write a program to find the n-th ugly number.

 Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

 Note that 1 is typically treated as an ugly number, and n does not exceed 1690.
 */

var nthUglyNumber = function(n) {
    var i = 1,count = 1;
    var queue2 = [];
    var queue3 = [];
    var queue5 = [];
    while(count<n){
        queue2.push(i*2);
        queue3.push(i*3);
        queue5.push(i*5);
        var min2 = queue2[0];
        var min3 = queue3[0];
        var min5 = queue5[0];
        var minest = Math.min(Math.min(min2,min3),min5);
        if(min2==minest){
            queue2.shift();
        }

        if(min3==minest){
            queue3.shift();
        }

        if(min5==minest){
            queue5.shift();
        }

        i=minest;
        count++;
    }

    return i;
};