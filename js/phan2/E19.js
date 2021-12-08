let sumNum = 0
function total(num) {
    sumNum += num
    if (num > 0) {
        total(num - 1)
    }
    return sumNum
}
console.log(total(9))
