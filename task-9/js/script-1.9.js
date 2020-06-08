(function () {
    'use strict'
    let date
    do {
        date = +prompt('Введите трёхзначное число')
    } while(isNaN(date) || date === 0 || date < 100 || date > 999)
    date = Math.abs(date)
    console.log(date)

    let y = 0;
    for(; date; date = Math.floor(date / 10)) {
    y *= 10;
    y += date % 10;
}
date = y;

alert(y)

})()