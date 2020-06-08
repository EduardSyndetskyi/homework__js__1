(function () {
    'use strict'
     
     let length
     do {
         length = +prompt('Введите длину стороны квадрата')
     } while(isNaN(length) || length === 0)
     length = Math.abs(length)
     console.log(length)

     document.write (`
         <b>Периметр квадрата: </b> 
         ${(length * 4).toFixed(1)} см.`)
 })()


