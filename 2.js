"use strict";

const string = "Привет, мир!"
let array = []

for (let i = string.length; i > -1; i--) {
    array.push(string.slice(i, i+1))
}
console.log(array.join(''));