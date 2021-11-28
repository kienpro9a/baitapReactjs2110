let primeNumber = 11
let flag = 1
if (primeNumber <= 1) {
    flag = 0
} else {
    for (let i = 2; i < primeNumber; i++) {
        if (primeNumber % i === 0) {
            flag = 0
        }
    }
}
if (flag === 0) {
    console.log('NO')
} else {
    console.log('YES')
}