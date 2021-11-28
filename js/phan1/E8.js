let number = 1357
let lenght = number.toString().length
let oddNumber = true
for (let i = 0; i < lenght; i++) {
    if (number % 2 === 0) {
        oddNumber = false
        break
    }
    number = Math.floor(number / 10)
}
if (oddNumber === true) {
    console.log('YES')
} else {
    console.log('NO')
}