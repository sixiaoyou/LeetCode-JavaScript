/**
 LeetCode 28:Implement strStr()
 * Created by You on 2017/5/17.
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStrV1 = function(haystack, needle) {
    return haystack.indexOf(needle);
};

var strStrV2 = function(haystack, needle) {
    var m = haystack.length;
    var n = needle.length;
    if(n==0){
        return 0;
    }
    for(var i=0;i<m;i++){
        var count=0;
        for(var j=0;j<n&&i+j<m;j++){
            if(haystack[i+j]!=needle[j]){
                break;
            }else{
                count++;
            }
        }
        if(count==n){
            return i;
        }
    }
    return -1;

};