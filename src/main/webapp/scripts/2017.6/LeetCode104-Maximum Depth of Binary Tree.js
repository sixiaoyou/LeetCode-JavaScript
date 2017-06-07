/**
 * Created by You on 2017/6/7.
 */
/*
【极客学院】
 LeetCode104. Maximum Depth of Binary Tree
 Given a binary tree, find its maximum depth.

 The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
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
 * @return {number}
 */

var maxDepth = function(root) {
    return root == null ? 0 : Math.max(maxDepth(root.left),maxDepth(root.right))+1;
};

var max;
var maxDepthV2 = function(root) {
    max = 0 ;
    order(root,1);
    return max;

};

function order(p,level){
    if(p!=null){
        if(p.left==null && p.right==null){
            if(max < level){
                max = level;
            }
        }
        order(p.left,level+1);
        order(p.right,level+1);
    }
}