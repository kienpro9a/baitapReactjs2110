let text = 'NguyeN THI tho tHu hA'
function myUcase(str) {
    str = str.toLowerCase()
    splitText = str.split(' ')
    for (let i = 0; i < splitText.length; i++) {
        splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].substr(1)
    }
    titleCase = splitText.join(' ')
    return titleCase
}
console.log(myUcase(text))