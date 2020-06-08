(function () {
    'use strict'

    const RATE = .9

    calc();

    function calc() {
        let usd  = document.querySelector('#usd').value
    
        let resault = usd * RATE;

        document.querySelector('#result span').innerText = `Получаю ${resault.toFixed(2)} €`
    }

    let fields = document.querySelectorAll('.field ')

    fields.forEach(field => {
        field.addEventListener('input', calc);

    })
})()