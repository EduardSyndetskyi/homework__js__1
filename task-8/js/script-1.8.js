(function () {
    'use strict'

    calc();

    function calc() {
        let sum  = document.querySelector('#sum').value
        let price = document.querySelector('#price').value

        let amountChocolate = sum / price;

        if ( sum == 0 || price == 0) {
            document.querySelector('#сhocolate span').innerText = `Введите значение или значение больше 0 `
        }else if (isNaN(sum) || isNaN(price) || isNaN(amountChocolate)) {
            document.querySelector('#сhocolate span').innerText = `Введите цену одной шоколадки`
        } else { 
            document.querySelector('#сhocolate span').innerText = `Шоколадок: ${Math.floor(amountChocolate)} на сумму: ${sum} по цене: ${price}`
        }

        if (sum == 0 || price == 0) {
            document.querySelector('#remainder span').innerText = `Введите значение или значение больше 0`
        }else if (Number.isInteger(amountChocolate)) {
            document.querySelector('#remainder span').innerText = `Остаток: 0`
        } else if (isNaN(sum) || isNaN(price) || isNaN(amountChocolate)){
            document.querySelector('#remainder span').innerText = `Введите сумму денег`
        }else {
            let remainder = sum % price; 
            document.querySelector('#remainder span').innerText = `Остаток: ${remainder.toFixed(2)}`
        }
        }

    let fields = document.querySelectorAll('.field ')

    fields.forEach(field => {
        field.addEventListener('input', calc);

    })
})()