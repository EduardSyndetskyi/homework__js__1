(function () {
    'use strict'
           
    let radius
    do {
        radius = +prompt('Введите радиус окружности')
    } while(isNaN(radius) || radius === 0)
    radius = Math.abs(radius)
    console.log(radius)

    document.write (`<b>Площадь окружности: </b> ${(Math.PI * Math.pow(radius,2)).toFixed(1)} см.`)
 })()
