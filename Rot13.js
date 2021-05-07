//https://www.codewars.com/kata/530e15517bc88ac656000716/javascript

function rot13(str) {
    var lower = "abcdefghijklmnopqrstuvwxyz",
        upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        mod   = upper.length;
      
    return str
     .split('')
     .map(function(i) {
            return i.match(/[a-zA-Z]/) 
                ? (i.charCodeAt(0) < 90) 
                    ? upper[(upper.indexOf(i) + 13) % mod]
                    : lower[(lower.indexOf(i) + 13) % mod]
                : i;
     })
     .join('');
}