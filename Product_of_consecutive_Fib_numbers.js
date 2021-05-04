function productFib(prod){
    let fib1 = 0;
    let fib2 = 1;
    let temp = 0;
    let answer = 0;
    
    do{
      temp = fib2;
      fib2 += fib1;
      fib1 = temp;
      answer = fib1 * fib2;
      
    }while(answer < prod)
      if(answer == prod){ 
        return [fib1, fib2, true]
      } else {
        return [fib1, fib2, false]
      }
  }
  