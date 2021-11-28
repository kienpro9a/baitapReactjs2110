let printOddNumber = 10
let line = ''
for (let i = 1; i <= printOddNumber; i++) {
    if (i % 2 === 1) {
        line += i + ' '
    }
}
console.log(line)