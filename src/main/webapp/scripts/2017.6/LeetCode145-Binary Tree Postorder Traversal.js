/**
 * Created by You on 2017/6/7.
 */
/*
【极客学院版】
 LeetCode145. Binary Tree Postorder Traversal
Given a binary tree, return the postorder traversal of its nodes' values.

For example:
    Given binary tree {1,#,2,3},
1
\
2
/
3
return [3,2,1].
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var list
var postorderTraversal = function(root) {
    list = [];
    postOrder(root);
    return list;
};
function postOrder(p){
    if(p!=null){
        postOrder(p.left);
        postOrder(p.right);
        list.push(p.val)
    }
}