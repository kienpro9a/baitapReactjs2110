let text = 'This is a beautiful day'
reverseString(text);
function reverseString(str) {
    let reverseText = str.split('').reverse().join('')
    console.log(reverseText)
}