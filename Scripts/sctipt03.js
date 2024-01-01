'use strict'

   /*
         Завдання:
         Змініть radio на select з варіантами валют:
         value – USD, текст користувача – U.S. Dollar
         value – UAH, текст для користувача – Ukrainian Hryvnia
         value – EUR, текст для користувача – Euro
         value – PLN, текст для користувача – Polish Zloty
         value – CHF, текст для користувача – Swiss Franc
        
         Поведінка функції addRow не має змінитися.
        */
         let productForm = document.forms.productForm;
         let productsTable = document.querySelector("#productsTable");
         let saveButton = document.querySelector("#saveButton");
         let curencySelected = document.querySelector("#currency");

         

         saveButton.addEventListener("click", function () {
            let selectedValue = curencySelected.options[curencySelected.selectedIndex].value;
             addRow(productForm.name.value,
                 productForm.price.value,
                 selectedValue);
 
             for (let i = 0; i < productForm.elements.length; i++) {
                 const element = productForm.elements[i];
                 if (element.type == "text") element.value = "";
             }
         });
 
         function addRow(name, price, currency) {
             let tr = document.createElement("tr");
             tr.insertAdjacentHTML("beforeend", `<td>${name}</td>`);
             tr.insertAdjacentHTML("beforeend", `<td>${price}</td>`);
             tr.insertAdjacentHTML("beforeend", `<td>${currency}</td>`);
             productsTable.append(tr);
         }
 