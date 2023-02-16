"use strict";


let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let firstDay = 'Суббота';

let indexWeek = daysOfWeek.indexOf(firstDay);

for (let i = 1; i <= 31; i++) {
    if (indexWeek  === daysOfWeek.length) { 
        indexWeek  = 0; 
    }
    console.log(`${i} января, ${daysOfWeek[indexWeek ]}`);
    indexWeek ++;
}