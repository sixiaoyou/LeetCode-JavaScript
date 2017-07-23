/**
 * Created by You on 2017/7/23.
 */
/**
 * @param {string[]} strs
 * @return {number}
 */
/*
'''
【网友实现】http://bookshadow.com/weblog/2017/04/03/leetcode-longest-uncommon-subsequence-ii/
    LeetCode522. Longest Uncommon Subsequence II
Given a list of strings, you need to find the longest uncommon subsequence among them. The longest uncommon subsequence is defined as the longest subsequence of one of these strings and this subsequence should not be any subsequence of the other strings.

    A subsequence is a sequence that can be derived from one sequence by deleting some characters without changing the order of the remaining elements. Trivially, any string is a subsequence of itself and an empty string is a subsequence of any string.

    The input will be a list of strings, and the output needs to be the length of the longest uncommon subsequence. If the longest uncommon subsequence doesn't exist, return -1.

Example 1:
Input: "aba", "cdc", "eae"
Output: 3
Note:

    All the given strings' lengths will not exceed 10.
The length of the given list will be in the range of [2, 50].
'''
 */



function isSubsequence(p,c) {
    var lp = p.length, lc = c.length;
    var pp = 0, pc = 0;
    while (pp <= lp - 1 && pc <= lc - 1) {
        if (p.charAt(pp) == c.charAt(pc)) {
            pc += 1;
        }
        pp += 1;
    }
    return pc != lc;
}

function SortArrayByLength(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = array.length - 1; j >= i; j--) {
            var temp = "";
            if (array[i].length < array[j].length){
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}

function getCounter(array) {
    json1 = {}
    for (var i in array) {
        if(!json1[array[i]]){
            json1[array[i]]=1;
        }else{
            json1[array[i]]+=1;
        }
    }
    return json1;
}

function getSList(array) {
    json2={}
    re = []
    for(var i in array){
        if(!json2[array[i]]){
            re.push(array[i])
            json2[array[i]]=1
        }
    }
    return re;
}


var findLUSlength = function(strs) {
    var count = 0;
    var sortedStrs = SortArrayByLength(strs);
    var map = getCounter(sortedStrs);
    var list = getSList(sortedStrs);
    for (var i = 0; i < list.length; i++) {
        if (map[list[i]] > 1) {
            continue;
        } else {
            for (var j = 0; j < i; j++) {
                if (isSubsequence(list[j], list[i])) {
                    count += 1;
                }
            }
            if (count == i) {
                return list[i].length;
            }
            count = 0;
        }
    }
    return -1;
};