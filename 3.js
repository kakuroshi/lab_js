let n = 100
let m = -5

let min = Math.min(n, m)
let max = Math.max(n, m)

let maxmin = max - min
let num = Math.floor((Math.random() * (max - min) + min) / 2) * 2 + 1

console.log(num);