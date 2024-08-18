
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function Area (a, b) {
//     return a * b;
// }
// console.log(Area(20, 20));
/*************************************************************************************************************/
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// const Pi = 3.14;
// function Radius (Pi, r){
//     return Pi * r * r;
// }
// console.log(Radius(Pi, 20));
/***********************************************************************************************************/
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// const Pi = 3.14;
// function Cylinder (Pi, r, h){
//     return 2*Pi * r * h;
// }
// console.log(Cylinder(Pi,20, 30));
/*******************************************************************************************************/
// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7];
// let arr3 = [8, 9, 10];
//
// function arrayPrinter(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// arrayPrinter(arr1);
// arrayPrinter(arr2);
// arrayPrinter(arr3);
/*******************************************************************************************************/
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function printToDocument(msg, tag){
//     document.write(`<${tag}>${msg}</${tag}>`);
//     console.log(arguments);
// }
// printToDocument('Hello', 'p');
/*******************************************************************************************************/
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function printToDocument(msg, tag, tag1) {
//     const html = `<${tag}>
//                             <${tag1}>${msg}</${tag1}>
//                             <${tag1}>${msg}</${tag1}>
//                             <${tag1}>${msg}</${tag1}>
//                          </${tag}>`;
//     document.write(html);
//     console.log(arguments);
// }
// printToDocument('Home','ul', 'li');
/*******************************************************************************************************/
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function printToDocument(msg, tag, tag1) {
//     document.write(`<${tag}>`);
//
//     for (let i = 0; i < 3; i++) {
//         document.write(`<${tag1}>${msg[i]}</${tag1}>`);
//     }
//     document.write(`</${tag}>`);
//
//     console.log(arguments);
// }
// printToDocument('Home','ul', 'li');
/*******************************************************************************************************/

// начиная ниже списала
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function array (myArray){
//     document.write(`<ul>`);
//     for (const item of myArray) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// }
// array ([1, "Hello", true, 42, "World", false]);
/*******************************************************************************************************/
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function array(users){
//     for (const user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
//     }
// }
// array([
//     {id:1, name:'Elena', age:20},
//     {id:2, name:'Elena', age:20},
//     {id:3, name:'Elena', age:20},
//     {id:4, name:'Elena', age:20},
//     {id:5, name:'Elena', age:20}
// ])
/*******************************************************************************************************/
// - створити функцію яка повертає найменьше число з масиву
// function arrayMin(num){
//     let min = num[0];
//     for (let i = 1; i < num.length; i++) {
//         let number = num[i];
//         if(number < min){
//             min = number
//         }
//     }
//     return min;
// }
// console.log(arrayMin([6, 33, -2, 0]));
/*******************************************************************************************************/
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function arraySum(sum){
//     let number = 0;
//     for (const item of sum) {
//         number = number+item;
//     }
//     return number;
// }
// console.log(arraySum([6, 33, 1]));
/*******************************************************************************************************/
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr, index1, index2){
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
//
//     return arr;
// }
// console.log(swap([11,22,33,44],0,1));
/**************************************************************************************/
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// function exchange(sumUAH,currencyValues,exchangeCurrency){
//     let sumCurrency;
//     for (const item of currencyValues) {
//         if(item.currency === exchangeCurrency){
//             sumCurrency = item;
//         }
//     }
//     let result = sumUAH/sumCurrency.value;
//     return result;
// }
//
// console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));