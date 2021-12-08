let s1 = 'hi hi hi hi hi'
let s2 = 'hi'
console.log(findLast(s1,s2))
function findLast(str1,str2) {
    let result = str1.lastIndexOf(str2)
    return result
}