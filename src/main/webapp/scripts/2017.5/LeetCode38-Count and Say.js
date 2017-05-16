/*
【极客学院版本】
LeetCode 38:Count and Say
 The count-and-say sequence is the sequence of integers beginning as follows:
 1, 11, 21, 1211, 111221, ...

 1 is read off as "one 1" or 11.
 11 is read off as "two 1s" or 21.
 21 is read off as "one 2, then one 1" or 1211.
 Given an integer n, generate the nth sequence.

 Note: The sequence of integers will be represented as a string.
 */

/**
 * Created by You on 2017/5/16.
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n<=0){
        return "";
    }else if(n==1){
        return "1";
    }else if(n==2){
        return "11";
    }else{
        var str = "11";
        var sb = "";
        for(var i=3;i<=n;i++){
            var count=1;
            var temp = str[0];
            for(var j=1;j<str.length;j++){
                if(str[j]==temp){
                    count++;
                }else{
                    sb+=count+temp;
                    count=1;
                    temp=str[j];
                }
            }
            sb+=count+temp;
            str=sb;
            sb="";
        }
        return str;
    }
};