(function () {
    'use strict'

    const sizeFile = 820

    calc();

    function calc() {
        let size  = document.querySelector('#size').value
    
        let resault = (size * 1000) / sizeFile;
 
        document.querySelector('#result span').innerText = `На вашей флешке поместится: ${resault.toFixed(0)} файл.`
    }

    let fields = document.querySelectorAll('.field ')

    fields.forEach(field => {
        field.addEventListener('input', calc);
    })
})()