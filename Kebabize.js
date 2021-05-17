//https://www.codewars.com/kata/57f8ff867a28db569e000c4a/javascript
function kebabize(str) {
    console.log(str)
    return str.replace(/[0-9]/g, '').split(/(?=[A-Z])/g).join('-').toLowerCase()
}