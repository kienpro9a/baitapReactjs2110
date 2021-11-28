let printEvenNumber = 10
let line = ''
for (let i = 1; i <= printEvenNumber; i++) {
    if (i % 2 === 0) {
        line += i + ' '
    }
}
console.log(line)