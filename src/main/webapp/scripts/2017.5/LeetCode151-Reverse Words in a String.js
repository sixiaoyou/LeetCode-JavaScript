/*
 LeetCode151:Reverse Words in a String
 Given an input string, reverse the string word by word.

 For example,
 Given s = "the sky is blue",
 return "blue is sky the".
 */


/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var s = str.split(" ");
    var re = "";
    for(var i=s.length-1;i>=0;i--){
        while(s[i]==""){
            s.splice(i,1)
        }
    }
    if(s.length>1){
        for(var i=s.length-1;i>0;i--){
            re+=s[i]+" "
        }
        re+=s[0];
    }else if (s.length==1){
        re=s[0];
    }
    return re;
};