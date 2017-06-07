/**
 * Created by You on 2017/6/7.
 */
/*
 【极客学院版】
 LeetCode50. Pow(x, n)
 Implement pow(x, n).
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function pow(x,n){
    if(n == 0){
        return 1;
    }else{
        var half = pow(x,n>>>1);
        if(n%2==0){
            x = half * half;
        }else{
            x = half * half * x;
        }
    }
    return x;
}
var myPow = function(x, n) {
    if(n == 0){
        return 1;
    }else if(n==1){
        return x;
    }else{
        if(n > 0){
            return pow(x,n);
        }else{
            return 1/pow(x,-n);
        }
    }
};