/**
 * Created by You on 2017/6/7.
 */
/*
Implement int sqrt(int x).

Compute and return the square root of x.
*/


/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var low = 0;
    var high = x;
    while(low <= high){
        var mid = Math.floor((low+high)/2);
        if(mid < Math.floor(x/mid)){
            low=mid+1;
        }else if(mid > Math.floor(x/mid)){
            high=mid-1;
        }else{
            return mid;
        }
    }
    return high;
};