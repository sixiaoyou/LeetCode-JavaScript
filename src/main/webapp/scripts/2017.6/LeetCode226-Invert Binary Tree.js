/**
 * Created by You on 2017/6/8.
 */
/*
 【极客学院版|后序遍历】
 LeetCode226. Invert Binary Tree

 Invert a binary tree.

 4
 /   \
 2     7
 / \   / \
 1   3 6   9
 to
 4
 /   \
 7     2
 / \   / \
 9   6 3   1
 Trivia:
 This problem was inspired by this original tweet by Max Howell:
 Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.
 *
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
 * @return {TreeNode}
 */

function postOrder(p){
    if(p!=null){
        postOrder(p.left);
        postOrder(p.right);
        var tmp = p.left;
        p.left = p.right;
        p.right = tmp;
    }
}

var invertTree = function(root) {
    postOrder(root);
    return root;
};