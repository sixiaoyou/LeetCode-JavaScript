/**
 * Created by You on 2017/7/25.
 */
/**
 * @param {string[]} timePoints
 * @return {number}
 */
function sortNumber(o1,o2){
    return o1 - o2
}

var findMinDifference = function(timePoints) {
    var minDiff = Number.POSITIVE_INFINITY
    var  convert = []
    for(var i=0;i<timePoints.length;i++){
        var computeTemp = 0;
        var splitTemp = timePoints[i].split(":");
        computeTemp += parseInt(splitTemp[0])*60+parseInt(splitTemp[1]);
        if(parseInt(splitTemp[0])<12){
            convert.push(computeTemp+1440);
        }
        convert.push(computeTemp);
    }
    convert.sort(sortNumber)
    for(var i = 0;i<convert.length-1;i++){
        minDiff = Math.min(convert[i+1]-convert[i],minDiff);
    }
    return minDiff;
};