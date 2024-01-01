'use strict'

  /*
        Завдання:
        Додайте у форму поле введення "Кількість на складі". Зробіть так, щоб під час натискання на кнопку "Зберегти" значення з поля "Кількість на складі"
        додавалася як четверта колонка таблиці.
        */
        let productForm = document.forms.productForm;
        let productsTable = document.querySelector("#productsTable");
        let saveButton = document.querySelector("#saveButton");
        let ratioForm = document.querySelector("#ratio");
        
        const quantityProduct = document.createElement("input");
        const quantityLabel = document.createElement("label");
        quantityProduct.type = "number";

        quantityProduct.setAttribute("name","quantity");
        quantityLabel.setAttribute("for","quantity");
        quantityLabel.textContent = "Кількість";

        const divQuantity = document.createElement("div");
        divQuantity.setAttribute("id","quantity");
        divQuantity.className = "form-group";
        divQuantity.append(quantityLabel);
        divQuantity.append(quantityProduct);

        productForm.insertBefore( divQuantity, ratioForm);

        saveButton.addEventListener("click", function () {
            addRow(productForm.name.value,
                productForm.price.value,
                productForm.currency.value,productForm.quantity.value);

            for (let i = 0; i < productForm.elements.length; i++) {
                const element = productForm.elements[i];
                if (element.type == "text") element.value = "";
                if (element.type == "number") element.value = 0;
            }
        });

        function addRow(name, price, currency, quantity) {
            let tr = document.createElement("tr");
            tr.insertAdjacentHTML("beforeend", `<td>${name}</td>`);
            tr.insertAdjacentHTML("beforeend", `<td>${price}</td>`);
            tr.insertAdjacentHTML("beforeend", `<td>${quantity}</td>`);
            tr.insertAdjacentHTML("beforeend", `<td>${currency}</td>`);
            productsTable.append(tr);
        }
