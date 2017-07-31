/**
 * Created by You on 2017/7/31.
 */
/*
 '''
 LeetCode507. Perfect Number
 We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

 Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.
 Example:
 Input: 28
 Output: True
 Explanation: 28 = 1 + 2 + 4 + 7 + 14
 Note: The input number n will not exceed 100,000,000. (1e8)

 '''
 */



function sumList(list){
    var sum = 0;
    for(var i in list){
        sum+=list[i];
    }
    return sum;
}

/**
 * @param {number} num
 * @return {boolean}
 */

var checkPerfectNumber = function(num) {

    if(num == 1){
        return false;
    }
    var snum = Math.ceil(Math.sqrt(num));
    var list = [];
    for(var i = 2;i<snum;i++){
        if(num%i==0){
            list.push(i);
            list.push(Math.floor(num/i));
        }
    }
    list.push(1);
    return sumList(list) == num;


};