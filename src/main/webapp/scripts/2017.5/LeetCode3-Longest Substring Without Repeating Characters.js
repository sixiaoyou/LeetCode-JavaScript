/*
 LeetCode 3:Longest Substring Without Repeating Characters
 Given a string, find the length of the longest substring without repeating characters.

 Examples:

 Given "abcabcbb", the answer is "abc", which the length is 3.

 Given "bbbbb", the answer is "b", with the length of 1.

 Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */

//网友实现:http://bookshadow.com/weblog/2015/04/05/leetcode-longest-substring-without-repeating-characters/
var lengthOfLongestSubstringV1 = function(s) {
    var dict = []
    var ans=0,start=0,end=0;
    for(var i in s){
        end+=1;
        if(s[i] in dict){
            dict[s[i]]+=1;
        }
        else{
            dict[s[i]]=1;
        }
        while(dict[s[i]]>1){
            dict[s[start]]-=1
            start+=1
        }
        ans=Math.max(ans,end-start);
    }
    return ans;
};

//网友实现:https://discuss.leetcode.com/topic/11632/a-python-solution-85ms-o-n
var lengthOfLongestSubstringV2= function(s) {
        var start = 0;
        var max=0;
        var dict=[];
        for(var i=0;i<s.length;i++){
            if(s[i] in dict && start<=dict[s[i]]){
                start=dict[s[i]]+1;
            }
            else{
                max=Math.max(max,i-start+1);
            }
            dict[s[i]]=i;
        }
    return max;
};