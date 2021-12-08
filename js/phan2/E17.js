function min(a, b, c) {
    if (a <= b && a <= c) {
        minNum = a
    } else if (b <= c) {
        minNum = b
    } else {
        minNum = c
    }
    console.log(minNum)
}
min(2, 4, 7)
function max(a, b, c) {
    if (a >= b && a >= c) {
        maxNum = a
    } else if (b >= c) {
        maxNum = b
    } else {
        maxNum = c
    }
    console.log(maxNum)
}
max(2, 4, 7)