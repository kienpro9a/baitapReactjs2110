let textSpace = `Hello 
My
 world`
console.log(textSpace)
console.log(coutSpace(textSpace))
function coutSpace(text) {
    text = text.replace(/\s+/g, '');
    console.log(text)
}