//https://www.codewars.com/kata/525d50d2037b7acd6e000534/javascript
Array.prototype.square = function() {
    return this.map((num) => {
      return num*num
    })
  }
  
  Array.prototype.cube = function() {
    return this.map((num) => {
      return num*num*num;
    })
  }
  
  Array.prototype.average = function() {
    return this.sum() / this.length
  }
  
  Array.prototype.sum = function() {
    return this.reduce((a, b) => {
      return a + b;
    }, 0)
  }
  
  Array.prototype.even = function() {
    return this.filter((item) => {
      return item % 2 == 0
    })
  }
  
  Array.prototype.odd = function() {
    return this.filter((item) => {
      return item % 2 != 0;
    })
  }