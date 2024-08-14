// Логічні розгалуження:

// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = 1;
// if (x !== 0) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно');
// }

// let x = 0;
// if (x !== 0) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно');
// }

// let x = -3;
// if (x !== 0) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно');
// }
/********************************************************************************/

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = 30;
// if (time >= 0 && time <= 14) {
//     console.log('Перша чверть години');
// }
// else if(time >= 15 && time <= 29){
//         console.log('Друга чверть години');
//     }
// else if(time >= 30 && time <= 44){
//         console.log('Третя чверть години');
//     }
// else if(time >= 45 && time <= 59){
//     console.log('Четверта чверть години');
// }
// else{
//     console.log('Неправильне значення');
// }
/************************************************************************************/

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = 15;
// if (day >= 1 && day <= 10) {
//     console.log('Перша декада');
// }
// else if(day >= 11 && day <= 20){
//         console.log('Друга декада');
//     }
// else if(day >= 21 && day <= 31){
//         console.log('Третя декада');
//     }
// else{
//     console.log('Неправильне значення');
// }
/***************************************************************************************/

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// switch ('5') {
//     case '1':
//         console.log('Monday');
//         break;
//     case '2':
//         console.log('Tuesday');
//         break;
//     case '3':
//         console.log('Wednesday');
//         break;
//     case '4':
//         console.log('Thursday');
//         break;
//     case '5':
//         console.log('Friday');
//         break;
//     case '6':
//         console.log('Saturday');
//         break;
//     case '7':
//         console.log('Sunday');
//         break;
//     default:
//         console.log('????');
// }
/**********************************************************************/

// - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let num1 = 5;
// let num2 = 20;
// if (num1 > num2){
//     console.log(`max ${num1}`)
// }
// else
//     if(num2 > num1){
//         console.log(`max ${num2}`)
//     }
// else {
//     console.log('Числа рівні');
// }

/****************************************************************/

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//

// let x;
// let newValue = null;
// if(!newValue){
//     x = "default";
// } else{
//     x = newValue;
// }
// console.log(x);


// let x;
// let newValue = 0;
// x = newValue || "default";
// console.log(x);


// let x;
// let newValue = null;
// x = newValue ?? "default";
// console.log(x);
/**************************************************************/

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if (coursesAndDurationArray[0].monthDuration > 5) {
//     console.log(coursesAndDurationArray[0].title + " - Супер");
// }
// if (coursesAndDurationArray[1].monthDuration > 5) {
//     console.log(coursesAndDurationArray[1].monthDuration + " - Супер");
// }
// if (coursesAndDurationArray[2].monthDuration > 5) {
//     console.log(coursesAndDurationArray[2].monthDuration + " - Супер");
// }
// if (coursesAndDurationArray[3].monthDuration > 5) {
//     console.log(coursesAndDurationArray[3].monthDuration + " - Супер");
// }
// if (coursesAndDurationArray[4].monthDuration > 5) {
//     console.log(coursesAndDurationArray[4].monthDuration + " - Супер");
// }
// if (coursesAndDurationArray[5].monthDuration > 5) {
//     console.log(coursesAndDurationArray[5].monthDuration + " - Супер");
// }








