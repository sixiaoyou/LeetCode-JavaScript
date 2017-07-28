/**
 * Created by You on 2017/7/28.
 */
/*
 LeetCode125. Valid Palindrome
 Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 For example,
 "A man, a plan, a canal: Panama" is a palindrome.
 "race a car" is not a palindrome.

 Note:
 Have you consider that the string might be empty? This is a good question to ask during an interview.

 For the purpose of this problem, we define empty string as valid palindrome.
 */
/**
 * @param {string} s
 * @return {boolean}
 */

function  isalphanumeric(c){
    if(c==' '){
        return false;
    }
    return  c>=0&&c<=9 || c>='a'&&c<='z'||c>='A'&&c<='Z';
}


var isPalindrome = function(s) {
    var length = s.length-1;
    var start = 0;
    var end = length;
    console.log(isalphanumeric(' '));
    while(start<=end){
        while(start<length&&!isalphanumeric(s[start])){
            start++;
        }
        while(end>0&&!isalphanumeric(s[end])){
            console.log(end);
            end--;
        }

        if(isalphanumeric(s[start])&&isalphanumeric(s[end])&&s[start].toLowerCase() != s[end].toLowerCase()){
            return false;
        }
        start++;
        end--;
    }
    return true;

};