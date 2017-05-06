/**
 * Created by You on 2017/5/6.
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var count=0;
    for(var i=s.length-1;i>=0;i--){
        if(s[i]!=' '){
            count+=1;
        }
        else{
            if(count){
                break;
            }
        }
    }
    return count;
};