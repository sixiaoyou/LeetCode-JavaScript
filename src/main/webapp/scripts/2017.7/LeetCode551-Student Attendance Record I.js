/**
 * Created by You on 2017/7/26.
 */
/*
 '''
 Leet551. Student Attendance Record I
 You are given a string representing an attendance record for a student. The record only contains the following three characters:

 'A' : Absent.
 'L' : Late.
 'P' : Present.
 A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

 You need to return whether the student could be rewarded according to his attendance record.

 Example 1:
 Input: "PPALLP"
 Output: True
 Example 2:
 Input: "PPALLL"
 Output: False

 '''
 */


/**
 * @param {string} s
 * @return {boolean}
 */

var checkRecordV1 = function(s) {
    var countA = 0;
    var countL = 0;
    var index = -1;
    for(var i = 0; i<s.length;i++){
        if(s[i]=='A'){
            countA+=1;
        }
        if(countA>1){
            return false;
        }
        if(s[i]=='L'){
            if(index==-1){
                index = i;
            }else if(i-index==1){
                countL+=1;
                index = i;
            }else{
                index = i;
                countL = 0;
            }
        }
        if(countL>1){
            return false;
        }
    }
    return true;
};


/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecordV2 = function(s) {
    var count  = 0;
    for(var i in s){
        if(s[i]=="A"){
            count+=1;
        }
        if(count>1){
            return false;
        }
    }
    return count<=1 && s.indexOf("LLL")==-1;
};