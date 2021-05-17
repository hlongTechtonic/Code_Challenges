//https://www.codewars.com/kata/52685f7382004e774f0001f7/javascript
function humanReadable(seconds) {
    let hours = Math.floor(seconds / 60 / 60);
    let min = Math.floor(seconds / 60 ) % 60;
    let sec = seconds % 60;
    
    hours = hours < 10 ? `0${hours}` : hours;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec
    
    return hours + ":" + min + ":" + sec
  }