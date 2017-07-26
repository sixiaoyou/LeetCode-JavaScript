/**
 * Created by You on 2017/7/26.
 */
/*
 LeetCode541. Reverse String II
 Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
 Example:
 Input: s = "abcdefg", k = 2
 Output: "bacdfeg"
 Restrictions:
 The string consists of lower English letters only.
 Length of the given string and k will in the range [1, 10000]
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

function subReverseStr(s,s1,start,end){
    for(var i = end-1;i>=start;i--){
        s1+=s[i];
    }
    return s1;
}

var reverseStrV1 = function(s, k) {
    var s1 = ""
    var size = s.length;
    if(k==1){
        return s;
    }else if(size<k){
        return subReverseStr(s,s1,0,size);
    }else if(size>=k&&size<2*k){
        return subReverseStr(s,s1,0,k)+s.substring(k,size);
    }else{
        var start = 0;
        var end = 2*k-1;
        while(end<=size){
            s1=subReverseStr(s,s1,start,start+k)
            s1+=s.substring(start+k,start+2*k)
            var ans = size - end - 1;
            if(ans<k){
                return subReverseStr(s,s1,end+1,size)
            }
            if(ans>=k && ans < 2*k){
                return subReverseStr(s,s1,end+1,end+1+k)+s.substring(end+1+k,size);
            }
            start+=2*k;
            end+=2*k;
        }
        return s1;

    }

};

function subReverseStr(s,ans,start,end,size){
    if(end>size){
        end = size;
    }
    for(var i = end-1;i>=start;i--){
        ans+=s[i];
    }
    return ans;
}


var reverseStrV2 = function(s, k) {
    var ans = "";
    var size = s.length;
    var ans = "";
    var round = Math.ceil(size/2*k);
    for(var i = 0;i<round;i++){
        ans=subReverseStr(s,ans,i*2*k,i*2*k+k,size);
        ans+=s.substring(i*2*k+k,(i+1)*2*k);
    }
    return ans;

};