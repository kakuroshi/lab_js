"use strict";
const a = 13.890123
const b = 2.891564
const n = 2

const a_fin = Math.floor((a % 1) * 10 ** n)
const b_fin = Math.floor((b % 1) * 10 ** n)

console.log("Первое число:", a_fin);
console.log("Второе число", b_fin);
console.log("a > b:",a_fin > b_fin);
console.log("a < b:",a_fin < b_fin);
console.log("a ≥ b:",a_fin >= b_fin);
console.log("a ≤ b:",a_fin <= b_fin);
console.log("a === b",a_fin === b_fin);
console.log("a ≠ b",a != b);