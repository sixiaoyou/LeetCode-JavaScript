/*
【网友实现】:https://discuss.leetcode.com/topic/43296/java-simple-and-clean-with-explanations-6-solutions
 LeetCode344:Reverse String
 Write a function that takes a string as input and returns the string reversed.

 Example:
 Given s = "hello", return "olleh".
 */

/**
 * Created by You on 2017/5/15.
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var charS = s.split('');
    var i = 0;
    var j = s.length-1;
    while(i<j){
        var temp = charS[i];
        charS[i] = charS[j];
        charS[j] = temp;
        i++;
        j--;
    }
    return charS.join("");
};