/*
【网友实现】:https://discuss.leetcode.com/topic/52311/javascript-solution
 LeetCode345:Reverse Vowels of a String
 Write a function that takes a string as input and reverse only the vowels of a string.

 Example 1:
 Given s = "hello", return "holle".

 Example 2:
 Given s = "leetcode", return "leotcede".

 Note:
 The vowels does not include the letter "y".
 */

/**
 * Created by You on 2017/5/16.
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if(s==null||s.length==0) return s;
    var charS = s.split("");
    var start = 0;
    var end = s.length-1;
    var vowels = "aeiouAEIOU";
    while(start<end){
        while(start<end&&vowels.indexOf(charS[start])==-1){
            start++;
        }

        while(start<end&&vowels.indexOf(charS[end])==-1){
            end--;
        }

        var temp = charS[end];
        charS[end] = charS[start];
        charS[start] = temp;
        start++;
        end--;
    }
    return charS.join("");
};