/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function count(s){
    var array=[0,0];
    for(i in s){
        if(s[i]=='0'){
            array[0]+=1;
        }else{
            array[1]+=1;
        }
    }
}

function zeros(strs, m, n) {
    var array = [0,0]
    var dp =new Array();
    for(var i=0;i<=m;i++){
        dp[i]=new Array();
        for(var j=0;j<=n;j++){
            dp[i][j]=0;
        }
    }
    for(var s in strs){
        array=count(strs[s]);
        for(var j=m;j>array[0]-1;j--){
            for(var k=n;k>array[1]-1;k--){
                dp[j][k]=Math.max(dp[j-array[0]][k-array[1]]+1,dp[j][k]);
            }
        }
    }
    return dp[m][n];
};

console.log(["10","0001","111001","1","0"],5,3)