/**
 * Created by You on 2017/5/15.
 */
/**
 * @param {string} str
 * @returns {string}
 */

function test() {
    var str = "   a   b ";
    var s = str.split(" ");
    var re = "";
    for(var i=s.length-1;i>=0;i--){
        while(s[i]==""){
            s.splice(i,1)
        }
    }
    console.log(s);
    if(s.length>1){
        for(var i=s.length-1;i>0;i--){
            re+=s[i]+" "
        }
        re+=s[0];
    }else if (s.length==1){
        re=s[0];
    }
    return re;
};
test()