let text = 'This is a beautiful day'
let find = 'is'
findString(text,find);
function findString(str1,str2) {
    position = str1.search(str2);
    console.log(position)
}