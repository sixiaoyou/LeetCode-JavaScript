/*
 LeetCode537:Complex Number Multiplication
 Given two strings representing two complex numbers.

 You need to return a string representing their multiplication. Note i2 = -1 according to the definition.

 Example 1:
 Input: "1+1i", "1+1i"
 Output: "0+2i"
 Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.
 Example 2:
 Input: "1+-1i", "1+-1i"
 Output: "0+-2i"
 Explanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.
 Note:

 The input strings will not have extra blank.
 The input strings will be given in the form of a+bi, where the integer a and b will both belong to the range of [-100, 100]. And the output should be also in this form.
 */

/**
 * Created by You on 2017/5/11.
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    var aS = a.split("+");
    var bS = b.split("+");
    var rr=Number(a[0])*Number(b[0]);
    var ii=-Number(a[1].substr(0,a[1].length-1))*Number(b[1].substr(0,b[1].length-1));
    var ri=Number(a[0])*Number(b[1].substr(0,b[1].length-1))+Number(b[0])*Number(a[1].substr(0,a[1].length-1))+"i"
    return rr+ii+"+"+ri
};