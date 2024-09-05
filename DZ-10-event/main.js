// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
// const button = document.getElementsByTagName('button')[0];
//     button.onclick = function () {
//    const div = document.getElementById('text');
//    div.style.display = 'none';
// };
/*******************************************************************************************/
//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// function checkAge() {
//     const age = document.getElementById("ageInput").value;
//     if (age < 18) {
//         alert("Вам ще немає 18 років.");
//     } else {
//         alert("Вік дозволяє продовжити.");
//     }
// }
/***************************************************************************************/
// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
//
// const myForm = document.forms.myForm;
// const target = document.getElementById('target');
//
// myForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const nameValue = myForm.name.value;
//     const surnameValue = myForm.surname.value;
//     const ageValue = myForm.age.value;
//     let obj = {nameValue, surnameValue, ageValue};
//     console.log(obj);
//     target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
// });
/***************************************************************************************************/
// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//
// let currentNumber = +localStorage.getItem('number'); //0(+)
// currentNumber += 1;
// localStorage.setItem('number', currentNumber);
//
// document.getElementById('target1').innerText = currentNumber;
/**************************************************************************************/
// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
//
// let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
// sessionsList.push(new Date());
// localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

/*************************************************************************************/
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
//
// const input = document.getElementById('xxx');
// const resultDiv = document.getElementById('result');
// input.oninput = function () {
//     resultDiv.innerText = +this.value * 2.2;//+ числове значення превращ.(const kilos = +this.value; let result = kilos*2.2)
// };

// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

// function addToLocalStorage(arrayName,objToAdd) {
//     const lsItem = localStorage.getItem(arrayName);
//     if (!lsItem){
//         throw new Error('there is no such array');
//     }
//     const array = JSON.parse(lsItem);
//     if (typeof objToAdd === 'object'){
//         array.push(objToAdd);
//     }
//     localStorage.setItem(arrayName, JSON.stringify(array));
// }
// addToLocalStorage("sessionsList", {});

/******************************************************************************************************/
//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//
// const table = document.getElementById('table');
// const tableFrom = document.forms['tableFrom'];
//
// tableFrom.onsubmit = function (e){
//     table.innerText = '';
//     e.preventDefault();
//     const linesValue = +tableFrom.lines.value;
//     const cellsValue = +tableFrom.cells.value;
//     const dataValue = tableFrom.data.value;
//     console.log(linesValue, cellsValue, dataValue);
//
//     for (let i = 0; i < linesValue; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < cellsValue; j++) {
//             const td = document.createElement('td');
//             td.innerText = dataValue;
//             tr.appendChild(td);
//
//         }
//         table.appendChild(tr);
//     }
// }
/**********************************************************************************************************/
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
// Ініціалізація змінних
// const priceBlock = document.getElementById('priceBlock');
// const initialPrice = 100; // Початкова ціна
//
// // Отримання збережених даних з localStorage
// let lastUpdateTime = localStorage.getItem('lastUpdateTime');
// let currentPrice = localStorage.getItem('currentPrice');
//
// // Якщо ціна не була збережена раніше, встановити початкову
// if (!currentPrice) {
//     currentPrice = initialPrice;
//     localStorage.setItem('currentPrice', currentPrice);
// }
//
// // Виведення поточної ціни
// priceBlock.innerText = `${currentPrice} грн`;
//
// // Отримання поточного часу в мілісекундах
// const currentTime = Date.now();
//
// // Перевірка, чи пройшло більше ніж 10 секунд з останнього оновлення
// if (lastUpdateTime && currentTime - lastUpdateTime >= 10000) {
//     currentPrice = parseInt(currentPrice) + 10; // Додавання 10 грн до ціни
//     localStorage.setItem('currentPrice', currentPrice);
//     localStorage.setItem('lastUpdateTime', currentTime); // Оновлення часу останнього оновлення
// } else if (!lastUpdateTime) {
//     // Якщо це перший візит або очищені дані - зберігаємо поточний час
//     localStorage.setItem('lastUpdateTime', currentTime);
// }
//
// // Оновлення відображеної ціни після перевірки
// priceBlock.innerText = `${currentPrice} грн`;

/***********************************************************************************************************/
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

// const itemsArray = Array.from({length: 100}, (_, index) => `Item ${index + 1}`);
//
// let currentPage = 1;
// const itemsPerPage = 10;
//
// // Функція для відображення об'єктів на сторінці
// function renderItems() {
//     const start = (currentPage - 1) * itemsPerPage;
//     const end = start + itemsPerPage;
//     const itemsToShow = itemsArray.slice(start, end);
//
//     // Виводимо об'єкти на сторінці
//     const itemsDiv = document.getElementById('items');
//     itemsDiv.innerHTML = itemsToShow.map(item => `<p>${item}</p>`).join('');
//
//     // Оновлюємо стан кнопок
//     document.getElementById('prevBtn').disabled = currentPage === 1;
//     document.getElementById('nextBtn').disabled = currentPage === Math.ceil(itemsArray.length / itemsPerPage);
// }
//
// // Функція для переходу на попередню сторінку
// function prevPage() {
//     if (currentPage > 1) {
//         currentPage--;
//         renderItems();
//     }
// }
//
// // Функція для переходу на наступну сторінку
// function nextPage() {
//     if (currentPage < Math.ceil(itemsArray.length / itemsPerPage)) {
//         currentPage++;
//         renderItems();
//     }
// }
//
// // Завантажуємо перші 10 об'єктів при завантаженні сторінки
// window.onload = renderItems;