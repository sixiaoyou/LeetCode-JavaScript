/**
 * Created by You on 2017/7/13.
 */
/*
 '''
 LeetCode122. Best Time to Buy and Sell Stock II
 Say you have an array for which the ith element is the price of a given stock on day i.

 Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

 '''
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxProfit = 0;
    var length = prices.length;
    if(length == 0){
        return 0;
    }
    var init = prices[0];
    for(var i=1;i<length;i++){
        if(prices[i]>init){
            maxProfit+=prices[i] - init;
        }
        init = prices[i];
    }
    return maxProfit;
};