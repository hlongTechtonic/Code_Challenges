//https://www.codewars.com/kata/59a9919107157a45220000e1/javascript
const findAll = (array, n) => {
    let newArray = []
    
    for(let i = 0; i < array.length; i++) {
      if(array[i] == n) {
        newArray.push(i)
      }
    }
    return newArray
}