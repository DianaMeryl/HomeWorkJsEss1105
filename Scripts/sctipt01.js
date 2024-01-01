'use strict'

    /*
        Завдання:
        Під час натискання на кнопку "Показати значення", використовуючи цикл for, виведіть значення всіх елементів керування input (крім input type=button) на консоль.
        */
    
document.querySelector("#checkForm").addEventListener("click", function () {
    const form = document.forms[0];
    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];
        console.log(element.name + " = " + element.value);
    }
});

