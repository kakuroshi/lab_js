"use strict";


const roadMines = [false, false, false, true, false, false, true, true, false, false];
let countMines = 0

for (let i = 0; i < roadMines.length; i++) {
    if (roadMines[i] == true) {
        countMines++
        if (countMines == 2) {
            console.log("танк уничтожен");
            break;
        }
        console.log("танк поврежден");
    } else {
        console.log(`танк переместился на ${i + 1}`);
        continue;
    }
}