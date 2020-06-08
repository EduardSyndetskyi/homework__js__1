(function () {
    'use strict'

    const NOW = 2020

    let birthyear
    do {
        birthyear = +prompt('Введите год рождения')
    } while(isNaN(birthyear) || birthyear === 0 || birthyear < 1900 || birthyear > 2019)
    birthyear = Math.abs(birthyear)
    console.log(birthyear)
    
    document.write (`<b>Возраст: </b> ${(NOW - birthyear)} лет/года`)

})();