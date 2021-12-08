let textSpace = ' Hello  world'
console.log(coutSpace(textSpace))
function coutSpace(text) {
    let cout = 0
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) === ' ') {
            cout++
        }
    }
    console.log(cout)
}