"use strict";

const count = 50;
let array = [];

for (let i =0; i < count; i++) {

    const n = 0;
    const m = 100;
    const Max = Math.max(n, m)
    const Min = Math.min(n, m)

    let num = Math.floor(Math.random() * (Max - Min + 1) + Min)
    array.push(num)
}
console.log(array)