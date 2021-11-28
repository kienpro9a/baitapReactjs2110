let number = 123676321
let lenght = number.toString().length
let symmetricNumber = true
let digit1
let digit2
for (let i = 0; i < lenght / 2; i++) {
    digit1 = (Math.floor(number / (1 * Math.pow(10, i)))) % 10
    digit2 = (Math.floor(number / (1 * Math.pow(10, lenght - i - 1)))) % 10
    if (digit1 !== digit2) {
        symmetricNumber = false
    }
}

if (symmetricNumber === true) {
    console.log('YES')
} else {
    console.log('NO')
}