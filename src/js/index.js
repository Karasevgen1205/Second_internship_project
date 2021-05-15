"use strict";

// BURGER

const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close');

modalBtn.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.target;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);

        modal.classList.add('show');
        body.classList.add('no-scroll');
    });
});


modalClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget.closest('.modal');

        currentModal.classList.remove('show');
        body.classList.remove('no-scroll');
    }); 
});

   




// const modalBtn = document.querySelectorAll('[data-modal]');
// const body = document.body;
// const modalClose = document.querySelectorAll('.modal__close');
// const modal = document.querySelectorAll('.modal');


// modalBtn.forEach(item => {
//     item.addEventListener('click', event => {
//         let $this = event.currentTarget;
//         let modalId = $this.getAttribute('data-modal');
//         let modal = document.getElementById(modalId);
//         let modalContent = modal.querySelector('.modal__content');
        
//         modalContent.addEventListener('click', event => {
//             event.stopPropagation();
//         });
        
//         modal.classList.add('show');
//         body.classList.add('no-scroll');
        
//         setTimeout(() => {
//             modalContent.style.transform = 'none';
//             modalContent.style.opacity = '1';
//         }, 1);
        
//     });
// });


// modalClose.forEach(item => {
//     item.addEventListener('click', event => {
//         let currentModal = event.currentTarget.closest('.modal');
        
//         closeModal(currentModal);
//     });
// });


// modal.forEach(item => {
//     item.addEventListener('click', event => {
//         let currentModal = event.currentTarget;
        
//         closeModal(currentModal);
//     });
// });


// function closeModal(currentModal) {
//     let modalContent = currentModal.querySelector('.modal__content');
//     modalContent.removeAttribute('style');
    
//     setTimeout(() => {
//         currentModal.classList.remove('show');
//         body.classList.remove('no-scroll');
//     }, 200);
// }











// const burger = document.getElementById('burgerTaggle');
// const sidebar = document.getElementById('sidebar');
// const page = document.getElementById('page');
// const body = document.body;


// burger.addEventListener('click', event => {
//     document.body.classList.toggle('show-mobileNav');
// });

// burger.addEventListener('click', event => {
//     if( body.classList.contains('show-sidebar') ) {
//         closeSidebar();
//     } else {
//         showSidebar();
//     }
// });

// function showSidebar() {
//     let mask = document.createElement('div');
//     mask.classList.add('page__mask');
//     mask.addEventListener('click', closeSidebar);
//     page.appendChild(mask);
    
//     body.classList.add('show-sidebar');
// }

// function closeSidebar() {
//     body.classList.remove('show-sidebar');
//     document.querySelector('.page__mask').remove();
// }

// $('#sandwichmenu').on('click', function(e) {
//     e.preventDefault();
//     $('#sandwichmenu').toggleClass("active");
// $('.js_menu').toggleClass("active");
// });





// let age = prompt("How o;d are you?", "100")

// alert(`yau age is ${age}`)


// let isBoss = confirm("Are you boss?")

// alert(isBoss)


// let nameUser = prompt("Whot is you name?", "Rik")

// alert(`You are suck my dick, ${nameUser}`)  


// let nameFirst = null

// let lastName = String(nameFirst)
// let lastName = Number(nameFirst)
// let lastName = Boolean(nameFirst)

// alert(lastName)

// if (isBoss === true) {
//     alert("OK")
// } else {
//     alert("Fuck off")
// }

// let message = prompt("Какое официальное название?", "");

// if (message === "ECMAScript") {
//     alert("Правильно")
// } else {
//     alert("Ты лох!")
// }


// let value = prompt("Enter you value", "");

// // (value > 0) ? alert(1) :
// // (value < 0) ? alert(-1) :
// // alert(0)

// if (value > 0) {
//     alert(1)
// } else if (value < 0) {
//     alert(-1)
// } else {
//     alert(0)
// }

// let result;

// let a = 7;
// let b = 1;

// (a + b < 4) ? result = "Мало" : result = "Много"

// alert(result)


// let message;
// let login = prompt("введите вашу должность", "");

// (login == "Сотрудник") ? message = "Привет" : 
// (login == "Директор") ? message = "Здравствуйте" :
// (login == "") ? message = "Нет логина" :
// message = "";

// alert(message);


// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   '';

// if (a > 0) {
//     alert(">0")
// } else if (a<0) {
//     alert("<0")
// } else {
//     alert("dick")
// }

// let age = 91;

// if (age >= 14 && age <= 90) {
//     alert("OK")
// } else {
//     alert("Kal")
// }


// let age = 13;

// if (age <= 14 || age >= 90) {
//     alert("OK")
// } else {
//     alert("Kal")
// }

// if (!(age >= 14 && age <= 90)) {
//     alert("OK")
// } else {
//     alert("Kal")
// }


// let message = prompt("Кто там?", "");

// if (message === "Админ") {
    
//     let pass = prompt("Пароль?", "") 
    
//     if (pass === "Я главный") {
//         alert("Здравствуйте!")
//     } else if (pass === "" || pass === null) {
//         alert("Отменено")
//     } else {
//         alert("Неверный пароль!")
//     }

// } else if (message === "" || message === null) {
//     alert("Отменено")
// } else {
//     alert("Я вас не знаю!")
// }


// let i = 0;

// while (i <= 3) {
//     alert(i);
//     i++;
// }


// for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {
  
//       let input = prompt(`Значение на координатах (${i},${j})`, '');
  
//       // Что если мы захотим перейти к Готово (ниже) прямо отсюда?
  
//     }
//   }
  
//   alert('Готово!');


// for (let i = 2; i <=10; i++) {
//     if (i % 2 == 0) {
//         alert(i)
//     } 
// }


// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }


// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }


// while (true) {

//     let message = prompt("Введите число большее 100!", "");

//     if (message > 100) {
//         alert("OK");
//         break
//     } else if (message <= 100) {
//         alert("Введите число больше 100!")
//     } else {
//         break
//     }
// }


// let num;

// do {
//   num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num);


// // Алгоритм поиска простых чисел
// let message = +prompt("Введите верхний порог простых чисел?", 2);

// next: 
// for (let i = 2; i <= message; i++) {

//     for (let j = 2; j < i; j++) {
        
//         if(i % j == 0) continue next; 
//     }

//     alert(i);
// }


// let browser = "Opera";
// if (browser == "Edge") {
//     alert("Opera")
// } else if (browser == "Chrome" 
//     || browser ==  "Safari" 
//     || browser ==  "Opera") {
//     alert("Normal")
// } else {
//     alert("Hope")
// }


// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }


// switch (number) {
//     case 0: 
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
//     default:
//         alert("XUI")
// }


// let name = "Kola";

// function showMessage () {
//     let name = "Ivan";
//     alert("Hello " + name);
// }

// showMessage()
// alert(name)


// function checkAge (age) {
//     if (age >= 18) {
//         return true
//     } else {
//         return confirm("Are you parents gey's?")
//     }
// }

// let age = prompt("How old are you?");

// if (checkAge(age)) {
//     alert("OK")
// } else {
//     alert("Kal")
// }


// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }


// function checkAge(age) {
//     return (age > 18) ? true : confirm("Parents?");
// }

// function checkAge(age) {
//     return (age >18) || confirm("parent?")
// }
  

// function minNumb(a, b) {
//     if (a > b) {
//         return b
//     } else if (a < b) {
//         return a
//     }   else {
//         return "Fuck off"
//     }
// }


// let x = +prompt("X?", "");
// let n = +prompt("N?", "");

// function pow(x, n) {
//     let result = x;

//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// if (n > 0) {
//     alert(pow(x, n))
// } else {
//     alert(`Ты ввел ${n}, а это - хуйня`)
// }



// let x = +prompt("X?", "");
// let n = +prompt("N?", "");

// function pow(x, n) {
//     return alert(x ** n);
// }

// pow(x, n)


// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );


// let ask = (question, yes, no) => {
//     (confirm(question)) ?  yes() : no()
// };

// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   );


// const user = {
//     name: "John",
//     age: 30,
//     isAdmin: true,
// }

// for (let key in user) {
//     alert(key)
// }


// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.


// const user = {};

// user.name = "John";
// user.surname = "Smith";


// user.name = "Pete";

// delete user.name;

// console.log(user.name)


// Напишите функцию isEmpty(obj), которая возвращает true, 
// если у объекта нет свойств, иначе false.

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


// const user = {
//     // name: "Johny",
// };

// if (user.noSuchProperty === undefined) {
//     alert ("Empty") 
// } else {
//     alert ("notEmpty")
// }


// const user = {
//     age: 30
// };

// function isEmpty(obj) {
//     for (let key in obj) {
//       return console.log("false");
//     }
//     return console.log("true");
// }

// isEmpty(user);


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// alert(salaries.John + salaries.Ann + salaries.Pete)

// let sum = 0;

// for (let prop in salaries) {
//     sum += salaries[prop]
// }

// alert(sum)


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(obj) {
    
//     for (let key in obj) {
//         if (typeof obj[key] == "number") {
//             obj[key] *= 2;  
//         }   
//     } 
// }

// multiplyNumeric(menu);
// console.log(menu);


// #Клонирование объекта

// let user = {
//     name: "john",
//     age: 30,
// };

// let clone = {};

// #1

// for (let key in user) {
//     clone[key] = user[key];
// };

// user.name = "Hot"
// console.log(user.name)
// console.log(clone.name)

// #2

// Object.assign(clone, user);

// console.log(clone)


// const user = {
//     name: "johny",
//     age: 30,
//     sayHi: function () {
//         alert("Hello!")
//     }
// }
// user.sayHi()

// OR

// const user = {
//     name: "johny",
//     age: 30,
//     sayHi () {
//         alert("Hello!")
//     }
// }

// user.sayHi()


// let user = {
//     name: "John",
// }
// let admin = {
//     name: "Admin",
// }

// function sayHi(obj) {
//     alert(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;

// admin.f()


// let user = {
//     name: "Джон",
//     go: function() { 
//         alert(this.name) 
//     }
// };

// (user.go)()

// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их 
// как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и 
// возвращает результат.

// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// #Answer
// let calculator = {
//     sum() {
//       return this.a + this.b;
//     },
  
//     mul() {
//       return this.a * this.b;
//     },
  
//     read() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );


// const ladder = {
//     step: 0,

//     up() {
//         this.step++;
//         return this
//     },

//     down() {
//         this.step--;
//         return this
//     },

//     showStep() {
//         alert(this.step);
//         return this
//     },
// }

// ladder.up().up().showStep()


// #Конструкторы


// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

// alert( new A() == new B() )


// function Calculator() {

//     this.read = function() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     };
  
//     this.sum = function() {
//       return this.a + this.b;
//     };
  
//     this.mul = function() {
//       return this.a * this.b;
//     };
//   }
  
//   let calculator = new Calculator();
//   calculator.read();
  
//   alert( "Sum=" + calculator.sum() );
//   alert( "Mul=" + calculator.mul() );


// #Опциональная цепочка

// let user1 = {
//     firstName: "Иван"
//   };
  
//   let user2 = null; // Представим, что пользователь не авторизован
  
//   let key = "firstName";
  
//   alert( user1?.[key] ); // Иван
//   alert( user2?.[key] ); // undefined
  
//   alert( user1?.[key]?.something?.not?.existing); // undefined


// #Symbol

// let id = Symbol("ID");

// alert(id.toString())
// alert(id.description)


// Числа

// let ms = 1e6;
// console.log(ms);

// let mf = 1e-6;
// console.log(mf);


// Шестнадцатеричные, двоичные и восьмеричные числа
// let a = 0b11111111; // бинарная форма записи числа 255
// let b = 0o377; // восьмеричная форма записи числа 255
// let с = 0xff; // Шестнадцатеричные форма записи числа 255

// alert( a == b ); // true, с двух сторон число 255


// let num = 255;

// alert( num.toString(16) );  // ff
// alert( num.toString(2) );   // 11111111


// console.log(1.1+2.2)


// let firstNum = +prompt("Enter you first number", "");
// let secondNum = +prompt("Enter you second number", "");

// alert(firstNum + secondNum)


// alert( Math.round(6.35*10) /10)


// let numb = prompt("Введите значение", "");

// const readNumber = function (numb) {
//     let vat = +parseInt(numb);
//     if (vat) {
//         return alert(vat)
//     } else {
//         return alert("null")
//     }
// }

// let test = readNumber(numb)

// test()


// function readNumber() {
//     let num;
  
//     do {
//       num = prompt("Введите число", 0);
//     } while ( !isFinite(num) );
  
//     if (num === null || num === '') return null;
  
//     return +num;
//   }
  
//   alert(`Число: ${readNumber()}`);


// function random(min, max) {
//     let result = min + Math.random() * (max - min);
//     return result;
// }

// alert(random(2, 7))



// function randomInt(min, max) {
//     let res = min + Math.random() * (max - min);
//     let result = Math.round(res);
//     return result;
// }

// alert(randomInt(2, 7))


// function randomInteger(min, max) {
//     // случайное число от min до (max+1)
//     let rand = min + Math.random() * (max - min + 1 );
//     return Math.floor(rand);
//   }
  
//   alert( randomInteger(1, 3) );


// alert(`
// 1
// 1
// 2
// 3
// 4
// 5
// 6`)


// let str1 = "Hello\nWorld";
// alert(str1)


// alert( "\u{1F60D}" );
// alert( "\"\"" );



// const answers = [];

// answers[0] = prompt('Name', '');
// answers[1] = prompt('Age', '');
// answers[2] = prompt('City', '');

// console.log(answers);
// document.write(answers);

