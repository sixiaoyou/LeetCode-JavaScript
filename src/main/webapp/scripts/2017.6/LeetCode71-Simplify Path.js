/**
 * Created by You on 2017/6/5.
 */
/*
【极客学院版】
LeetCode71. Simplify Path
Given an absolute path for a file (Unix-style), simplify it.

    For example,
    path = "/home/", => "/home"
path = "/a/./b/../../c/", => "/c"

Corner Cases:
    Did you consider the case where path = "/../"?
    In this case, you should return "/".
    Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
    In this case, you should ignore redundant slashes and return "/home/foo".
*/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var stack=[]
    var array = path.split("/");
    for(var i in array){
        if(array[i]==""||array[i]=="."){
            continue;
        }else{
            if(array[i]==".."){
                if(stack.length!=0){
                    stack.pop();
                }
            }
            else{
                stack.push(array[i]);
            }
        }
    }
    if(stack.length==0){
        return "/";
    }else{
        var sb=""
        stack.reverse;
        while(stack.length!=0){
            sb="/"+stack.pop()+sb
        }

        return sb;
    }


};