/**
 * Created by You on 2017/6/5.
 */
/*
【极客学院版】
 LeetCode20. Valid Parentheses
 Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

 The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    if (s.length == 0 || s.length % 2 != 0) {
        return false;
    } else {
        var stack  = [];
        for (var i = 0; i < s.length; i++) {
            switch (s[i]) {
                case '(':
                case '[':
                case '{':
                    stack.push(s[i]);
                    break;
                case ')':
                    if (stack.length==0 || stack[stack.length-1] != '(') {
                        return false;
                    } else {
                        stack.pop();
                    }
                    break;
                case ']':
                    if (stack.length==0 || stack[stack.length-1] != '[') {
                        return false;
                    } else {
                        stack.pop();
                    }
                    break;
                case '}':
                    if (stack.length==0 || stack[stack.length-1] != '{') {
                        return false;
                    } else {
                        stack.pop();
                    }
                    break;
                default:
                    break;
            }

        }
        return stack.length==0;
    }
};
