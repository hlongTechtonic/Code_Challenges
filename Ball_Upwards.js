//https://www.codewars.com/kata/566be96bb3174e155300001b/javascript
function maxBall(v0) {
    let vm = v0 / (60 * 60 / 1000)
    let time = (vm / 9.81) * 10
    let roundedTime = Math.round(time)
    return roundedTime
}