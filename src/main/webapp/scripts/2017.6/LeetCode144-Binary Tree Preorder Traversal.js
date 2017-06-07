/**
 * Created by You on 2017/6/7.
 */
/*
【极客学院】
 LeetCode144. Binary Tree Preorder Traversal
 Given a binary tree, return the preorder traversal of its nodes' values.

 For example:
 Given binary tree {1,#,2,3},
 1
 \
 2
 /
 3
 return [1,2,3].
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
var preorderTraversal = function(root) {
    list = [];
    preOrder(root);
    return list;
};

function preOrder(p){
    if(p!=null){
        list.push(p.val);
        preOrder(p.left);
        preOrder(p.right);
    }
}
