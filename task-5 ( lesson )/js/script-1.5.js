(function () {
    'use strict'
     
     let distance
     do {
         distance = +prompt('Введите расстояние между городами в км')
     } while(isNaN(distance))
     distance = Math.abs(distance)
     console.log(distance)
 
     let time
     do {
         time = +prompt('Введите время')
     } while(isNaN(time) || time === 0)
     time = Math.abs(time)
     console.log(time)

     document.write (`<b>Cкорость, с которой необходимо двигаться:</b> 
        ${(distance / time).toFixed(1)} км/час`)
 })()