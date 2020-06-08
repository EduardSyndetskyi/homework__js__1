(function () {
    'use strict'

    let name 
    do {
        name = prompt('Введите имя')
    } while(Number(name) || name == null || name.length < 3)
    
    document.write (`Привет, ${name}!`)
})();
