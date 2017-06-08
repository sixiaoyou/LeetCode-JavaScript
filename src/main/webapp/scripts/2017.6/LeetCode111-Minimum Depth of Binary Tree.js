/**
 * Created by You on 2017/6/8.
 */
/*
 【极客学院版】
 LeetCode111. Minimum Depth of Binary Tree
 Given a binary tree, find its minimum depth.

 The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
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

var min;
var minDepth = function(root) {
    min = Number.MAX_VALUE;
    if(root==null){
        return 0;
    }
    order(root,1);
    return min;

};

function order(p,level){
    if(p!=null){
        if(p.left == null && p.right==null){
            if(min>level){
                min = level;
            }
        }
        order(p.left,level+1);
        order(p.right,level+1);
    }
}