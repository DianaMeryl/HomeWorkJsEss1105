'use strict'


        /*
        Завдання:
        Зробіть так, щоб під час натискання на кнопку "Зберегти" з'являлося повідомлення "Ви дійсно хочете зберегти зміни?".
        Якщо користувач натискає на "Так", зміни зберігаються, якщо "Скасувати", зміни не застосовуються.
        */
       
        let users = [
            {
                balance: '1250.89',
                age: 24,
                name: {
                    first: 'Golden',
                    last: 'Clements'
                },
                company: 'EWAVES',
                email: 'golden.clements@ewaves.io'
            },
            {
                balance: '3637.94',
                age: 23,
                name: {
                    first: 'Francis',
                    last: 'Hebert'
                },
                company: 'XPLOR',
                email: 'francis.hebert@xplor.biz'
            },
            {
                balance: '1106.44',
                age: 31,
                name: {
                    first: 'Hale',
                    last: 'Cross'
                },
                company: 'EARTHPURE',
                email: 'hale.cross@earthpure.us'
            },
            {
                balance: '2502.43',
                age: 25,
                name: {
                    first: 'Delores',
                    last: 'Sykes'
                },
                company: 'ASSITIA',
                email: 'delores.sykes@assitia.com'
            },
            {
                balance: '3651.54',
                age: 21,
                name: {
                    first: 'Ryan',
                    last: 'Bolton'
                },
                company: 'MOLTONIC',
                email: 'ryan.bolton@moltonic.biz'
            },
            {
                balance: '1345.79',
                age: 21,
                name: {
                    first: 'Carey',
                    last: 'Schwartz'
                },
                company: 'UXMOX',
                email: 'carey.schwartz@uxmox.info'
            },
            {
                balance: '3261.11',
                age: 30,
                name: {
                    first: 'Trevino',
                    last: 'Mullins'
                },
                company: 'TERRASYS',
                email: 'trevino.mullins@terrasys.org'
            },
            {
                balance: '1659.17',
                age: 20,
                name: {
                    first: 'Gilliam',
                    last: 'Mendez'
                },
                company: 'ZENTHALL',
                email: 'gilliam.mendez@zenthall.tv'
            },
            {
                balance: '2340.54',
                age: 32,
                name: {
                    first: 'Brewer',
                    last: 'Vargas'
                },
                company: 'QIMONK',
                email: 'brewer.vargas@qimonk.co.uk'
            },
            {
                balance: '1736.91',
                age: 24,
                name: {
                    first: 'Newman',
                    last: 'Wynn'
                },
                company: 'VISALIA',
                email: 'newman.wynn@visalia.name'
            }
        ];
        // Клас для виведення інформації в UL.
        class ListService {
            selectedData;
            data;
            listElement;

            constructor(data, listElement, displayFn) {
                this.data = data;
                this.listElement = listElement;

                for (let index = 0; index < data.length; index++) {
                    const currentData = data[index];
                    
                    let li = document.createElement("li");
                    li.textContent = displayFn(currentData);
                    li.dataset.index = index;

                    this.listElement.append(li);
                }
            }

            select(id) {
                this.selectedData = this.data[id];
                this.deselectAll();
                this.listElement.children[id].classList.add("selected");
            }

            deselectAll() {
                for (let i = 0; i < this.listElement.children.length; i++) {
                    const child = this.listElement.children[i];
                    child.classList.remove("selected");
                }
            }
        }

        // Клас для роботи з формою, яка редагує інформацію про користувача.
        class UserFormService {
            currentUser;
            form;

            constructor(form) {
                this.form = form;
            }

            fillForm(user) {
                this.currentUser = user;

                this.form.firstName.value = user.name.first;
                this.form.lastName.value = user.name.last;
                this.form.companyName.value = user.company;
                this.form.balance.value = user.balance;
                this.form.email.value = user.email;
                this.form.age.value = user.age;
            }

            saveForm() {
                this.currentUser.name.first = this.form.firstName.value;
                this.currentUser.name.last = this.form.lastName.value;
                this.currentUser.company = this.form.companyName.value;
                this.currentUser.balance = this.form.balance.value;
                this.currentUser.email = this.form.email.value;
                this.currentUser.age = this.form.age.value;
            }
        }

        let userList = document.querySelector("#userList");
        let saveButton = document.querySelector("#saveButton");

        let listService = new ListService(users, userList, x => x.name.first + " " + x.name.last);
        let formService = new UserFormService(document.forms[0]);

        userList.addEventListener("click", function (e) {
            if (e.target.tagName != "LI") return;

            const userNumber = e.target.dataset.index;
            listService.select(userNumber);
            formService.fillForm(listService.selectedData);
        });

        saveButton.addEventListener("click", function () {
            let agree = confirm("Ви дійсно хочете зберегти зміни?");
            if(agree){
                formService.saveForm();
            }
            
        });