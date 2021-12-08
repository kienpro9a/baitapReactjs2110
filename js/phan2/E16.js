let text = 'https://www.facebook.com/ngothucdat'
function a(str) {
    str = str.toLowerCase()
    splitText = str.split('/')
    return splitText.at(-1)
}
console.log(a(text))