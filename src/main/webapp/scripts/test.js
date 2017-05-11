function sortNumber(a,b){
    return a-b;
}
a=[6214, -2290, 2833, -7908]
a.sort(sortNumber)

document.write("<br>");
for(var i in a) {
    document.write(a[i]);
    document.write("<br>");
}

