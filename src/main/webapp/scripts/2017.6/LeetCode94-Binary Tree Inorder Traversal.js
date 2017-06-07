/**
 * Created by You on 2017/6/7.
 */
/*
 【极客学院版】
 LeetCode94. Binary Tree Inorder Traversal
 Given a binary tree, return the inorder traversal of its nodes' values.

 For example:
 Given binary tree [1,null,2,3],
 1
 \
 2
 /
 3
 return [1,3,2].
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
var inorderTraversal = function(root) {
    list = []
    inOrder(root);
    return list;
};

function inOrder(p){
    if(p!=null){
        inOrder(p.left);
        list.push(p.val);
        inOrder(p.right);
    }
}