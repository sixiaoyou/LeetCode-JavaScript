/**
 LeetCode28:Implement strStr()
 Implement strStr().

 Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
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

//【极客学院版】实现细节清晰,非考察Api的调用，但TLE。
var strStrV2 = function(haystack, needle) {
    var m = haystack.length;
    var n = needle.length;
    if(n==0){
        return 0;
    }
    for(var i=0;i<m;i++){
        var count=0;
        for(var j=0;j<ns&&i+j<m;j++){
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