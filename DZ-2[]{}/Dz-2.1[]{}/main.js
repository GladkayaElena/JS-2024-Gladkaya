// Масиви та об'єкти:


// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let array = [5, 222, true, 'Elena', 55, 30, false, 322, 444, 100];
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);
// console.log(array[6]);
// console.log(array[7]);
// console.log(array[8]);
// console.log(array[9]);

/***********************************************************************/

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book1 = {
//   title: 'Kateryna',
//     pageCount: 200,
//     genre: 'drama'
// }
// console.log(book1)
//
// let book2 = {
//   title: 'Garri Potter',
//   pageCount: 900,
//   genre: 'fantasy'
// }
// console.log(book2)
//
// let book3 = {
//   title: 'Kobzar',
//   pageCount: 600,
//   genre: 'drama'
// }
// console.log(book3)

/***********************************************************************/

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// let book1 = {
//   title: 'Kateryna',
//   pageCount: 200,
//   genre: 'drama',
//   authors: [
//       {name: 'Taras Shevchenko', age: 30}
//   ]
// }
// console.log(book1)
//
// let book2 = {
//   title: 'Garri Potter',
//   pageCount: 900,
//   genre: 'fantasy',
//   authors: [
//     {name: 'Rowling', age: 50}
//   ]
// }
// console.log(book2)
//
// let book3 = {
//   title: 'Kobzar',
//   pageCount: 600,
//   genre: 'drama',
//   authors: [
//     {name: 'Taras Shevchenko', age: 25}
//   ]
// }
// console.log(book3)

/******************************************************************/

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

// let user = [
//     {name: 'vasya', username: 'Vasya', password: 1234},
//     {name: 'petya', username: 'Petya', password: 5678},
//     {name: 'anna', username: 'Anna', password: 9123},
//     {name: 'olya', username: 'Olya', password: 4567},
//     {name: 'elena', username: 'Elena', password: 8912},
//     {name: 'yura', username: 'Yura', password: 3456},
//     {name: 'dima', username: 'Dima', password: 7891},
//     {name: 'sasha', username: 'Sasha', password: 2345},
//     {name: 'denis', username: 'Denis', password: 6789},
//     {name: 'katya', username: 'Katya', password: 1012}
// ];
//
// console.log(user[0].password);
// console.log(user[1].password);
// console.log(user[2].password);
// console.log(user[3].password);
// console.log(user[4].password);
// console.log(user[5].password);
// console.log(user[6].password);
// console.log(user[7].password);
// console.log(user[8].password);
// console.log(user[9].password);

/**************************************************************************/

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

// const forecast = [
//     {day: 'Monday', morning: 19, afternoon: 28, evening: 23},
//     {day: 'Tuesday', morning: 18, afternoon: 29, evening: 22},
//     {day: 'Wednesday ', morning: 17, afternoon: 26, evening: 20},
//     {day: 'Thursday', morning: 19, afternoon: 27, evening: 21},
//     {day: 'Friday', morning: 19, afternoon: 30, evening: 23},
//     {day: 'Saturday', morning: 18, afternoon: 29, evening: 22},
//     {day: 'Sunday', morning: 19, afternoon: 31, evening: 20}
//  ];
// console.log(forecast[0].afternoon)
// // OR
// const temperatures  = [
//     [15, 30, 18],
//     [16, 29, 19],
//     [14, 28, 17],
//     [17, 26, 20],
//     [15, 27, 18],
//     [14, 28, 16],
//     [13, 29, 15]
// ];
// console.log(temperatures[0][1])