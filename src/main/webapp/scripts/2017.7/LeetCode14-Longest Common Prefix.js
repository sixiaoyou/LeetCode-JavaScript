/**
 * Created by You on 2017/7/29.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */


//【网友实现】:https://discuss.leetcode.com/topic/27913/sorted-the-array-java-solution-2-ms
var longestCommonPrefixV1 = function (strs) {
    if (strs.length == 0) {
        return "";
    }
    strs.sort()
    var a = strs[0], b = strs[strs.length - 1];
    var la = a.length, lb = b.length;
    var s = "";
    for (var i = 0; i < la; i++) {
        if (lb > i && b[i] == a[i]) {
            s += a[i];
        } else {
            return s;
        }
    }
    return s;

};


function sortByLength(o1, o2) {
    return o1.length - o2.length;
}

function isCommonPrefix(strs, str, end) {
    for (var i = 1; i < strs.length; i++) {
        if (str.substring(0, end) != strs[i].substring(0, end)) {
            return false;
        }

    }
    return true;
}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefixV2 = function (strs) {
    if (strs.length == 0) {
        return "";
    }
    strs.sort(sortByLength);
    var ls = strs[0].length;
    var end = ls;
    while (end >= 0) {
        if (isCommonPrefix(strs, strs[0], end)) {
            return strs[0].substring(0, end);
        }
        end -= 1;
    }

    return "";


};