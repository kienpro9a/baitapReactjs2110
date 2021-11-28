let primeNumber = 10
let line = ''
let x
function getPrime(x) {
    if (x < 2)
        return 0;
    for (let i = 2; i <= Math.sqrt(x); i++)
        if (x % i === 0)
            return 0;
    return 1;
}
for (let i = 2; i <= primeNumber; i++) {
    x = getPrime(i)
    if (x === 1) {
        line += i + ' '
    }
}
console.log(line)