/**
 * Created by You on 2017/7/31.
 */

/*
 '''
 LeetCode633. Sum of Square Numbers
 Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

 Example 1:
 Input: 5
 Output: True
 Explanation: 1 * 1 + 2 * 2 = 5
 Example 2:
 Input: 3
 Output: False
 '''
 */


function isInteger(s){
    var temp = Math.sqrt(s)
    return  Math.floor(temp) == temp;

}

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {

    if(isInteger(c)){
        return true;
    }else{
        var temp = Math.floor(Math.sqrt(c));
        for(var i = temp;i>= 0;i--){
            if(isInteger(c-i*i)){
                return true;
            }
        }
        return false;
    }
};