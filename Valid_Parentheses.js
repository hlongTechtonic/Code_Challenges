function validParentheses(parens){
    let numOfParens = 0;
    console.log(parens);
    
    for(let i = 0; i < parens.length; i++) {
      if(parens[i] == "(") {
        numOfParens++;
      } else {
        numOfParens--;
      }
      if(numOfParens < 0){
        return false;
      }
    }
    if(numOfParens == 0){
      return true;
    } else {
      return false;
    }
  }