/*
【极客学院版本】
 LeetCode242:Valid Anagram
 Given two strings s and t, write a function to determine if t is an anagram of s.

 For example,
 s = "anagram", t = "nagaram", return true.
 s = "rat", t = "car", return false.

 Note:
 You may assume the string contains only lowercase alphabets.

 Follow up:
 What if the inputs contain unicode characters? How would you adapt your solution to such case?
 */



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function test(s,t) {
    if (s == null && t == null) {
        return true;
    } else if (s == null && t != null) {
        return false;
    } else if (s != null && t == null) {
        return false;
    } else {
        if (s.length != t.length) {
            return false;
        }
        var n = s.length;
        var arrayS = [].fill.call(new Array(26), 0);
        var arrayT = [].fill.call(new Array(26), 0);
        for (var i = 0; i < n; i++) {
            arrayS[s[i].charCodeAt() - 97]++;
            arrayT[t[i].charCodeAt() - 97]++;
        }
        for (var j = 0; j < 26; j++) {
                if (arrayS[j] != arrayT[j]) {
                    return false;
                }
            }
            return true;
        }
}

    