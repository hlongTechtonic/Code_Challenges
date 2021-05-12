//https://www.codewars.com/kata/5208f99aee097e6552000148/javascript

function solution(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1 $2')
}