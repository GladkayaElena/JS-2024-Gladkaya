// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User (id, name, surname , email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = [];
//
// users.push (new User(1, 'Elena', 'Gladiola', 'elena@', 12345));
// users.push (new User(2, 'Olga', 'Yasmina', 'olga@', 67890));
// users.push (new User(3, 'Alex', 'Truncheon', 'alex@', 54321));
// users.push (new User(4, 'Petr', 'Petrov', 'petr@', 98760));
// users.push (new User(5, 'Sacha', 'Grey', 'sacha@', 23456));
// users.push (new User(6, 'Oleg', 'Yegorovich', 'oleg@', 78912));
// users.push (new User(7, 'Anna', 'Governable', 'anna@', 34567));
// users.push (new User(8, 'Asy', 'Boy', 'asy@', 89012));
// users.push (new User(9, 'Dima', 'Dmitrovich', 'dima@', 45678));
// users.push (new User(10, 'Gari', 'Gabrilovich', 'gari@', 90123));
//
// console.log(users)

/**************************************************************************************************/
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filtered = users.filter(course => course.id % 2 === 0);
// console.log(filtered);
/********************************************************************************************************/
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// users.sort((a, b) => a.id - b.id);
// console.log("Sorted array:", users);
/************************************************************************************************************/
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// function Client (id, name, surname , email, phone, order){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
// let clients = [
//
// new Client(1, 'Elena', 'Gladiola', 'elena@', 12345, [{title: 'banana'}, {title: 'banana'}]),
// new Client(2, 'Olga', 'Yasmina', 'olga@', 67890, [{title: 'cocos'}]),
// new Client(3, 'Alex', 'Truncheon', 'alex@', 54321, [{title: 'orange'}]),
// new Client(4, 'Petr', 'Petrov', 'petr@', 98760, [{title: 'apple'}, {title: 'apple'}, {title: 'apple'}]),
// new Client(5, 'Sacha', 'Grey', 'sacha@', 23456, [{title:'sugar'}]),
// new Client(6, 'Oleg', 'Yegorovich', 'oleg@', 78912, [{title: 'cake'}, {title: 'cake'}, {title: 'cake'}]),
// new Client(7, 'Anna', 'Governable', 'anna@', 34567, [{title: 'mango'}, {title: 'mango'}]),
// new Client(8, 'Asy', 'Boy', 'asy@', 89012, [{title: 'tomato'}, {title: 'tomato'}, {title: 'tomato'}, {title: 'tomato'}]),
// new Client(9, 'Dima', 'Dmitrovich', 'dima@', 45678, [{title: 'kiwi'}]),
// new Client(10, 'Gari', 'Gabrilovich', 'gari@', 90123, [{title: 'carrot'}]),
// ];
// console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// clients.sort((a, b) => b.order.length - a.order.length);
// console.log("Sorted order:", clients);
/**************************************************************************************************/
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car (model, producer, year, maxSpeed, volume){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function (){
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed){
//        if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
//     };
//     this.changeYear = function (year){
//         if (year > 1815) this.year = year;
//     };
//     this.addDriver = function (driver) {
//         if (driver) this.driver = driver;
//     };
// }
// const car = new Car('Honda', 'China', 2020, 220, 100);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(2000);
// car.addDriver({});
// console.log(car);

/**********************************************************************************/
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, producer, year, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//         drive () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         };
//
//         info () {
//             for (const key in this) {
//                 console.log(key, this[key]);
//             }
//         };
//
//         increaseMaxSpeed (newSpeed) {
//             if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
//         };
//         changeYear (year) {
//             if (year > 1815) this.year = year;
//         };
//         addDriver (driver) {
//             if (driver) this.driver = driver;
//         };
//     }
// const car = new Car('Honda', 'China', 2020, 220, 100);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(2000);
// car.addDriver({});
// console.log(car);
/*******************************************************************************************************/
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//  class Cinderella {
//      constructor(name, age, sizeLeg) {
//          this.name = name;
//          this.age = age;
//          this.sizeLeg = sizeLeg;
//      }
//  }
//  class Prinz{
//      constructor(name, age, shoe) {
//          this.name = name;
//          this.age = age;
//          this.shoe = shoe;
//      }
//  }
//  const cinderellas = [
//      new Cinderella('Nina', 25, 38),
//      new Cinderella('Olga', 27, 39),
//      new Cinderella('Nata', 26, 38),
//      new Cinderella('Oksana', 28, 36),
//      new Cinderella('Maria', 25, 38),
//      new Cinderella('Elena', 25, 37),
//      new Cinderella('Anna', 27, 39),
//      new Cinderella('Yuna', 28, 38),
//      new Cinderella('Inna', 28, 36),
//      new Cinderella('Katya', 29, 39),
// ];
//  const prinz = new Prinz('Sacha', 30, 37);

// for (const cinderella of cinderellas) {
//     if (cinderella.sizeLeg ===  prinz.shoe){
//         console.log('Принцеса принца', cinderella);
//     }
// }
/***************/
// const cinderellaMain = cinderellas.find(cinderella => cinderella.sizeLeg === prinz.shoe)
// console.log('Принцеса принца', cinderellaMain);
/**********************************************************************************************************/
// Через Array.prototype. створити власний foreach, filter, map
// //
// Array.prototype.myforEach = function (callback) {
//    const yourArray = this;
//     for (const item of yourArray) {
//         callback(item);
//     }
// };
// [5, 20, 40].myforEach((x) => console.log(x));
/*****************/
// Array.prototype.myFilter = function (callback) {
//    const arr = [];
//     for (const item of this) {
//         if (callback(item)){
//             arr.push(item);
//         }
//     }
//     return arr;
// };
// const result = [1, 2, 3, 4, 5].myFilter(item => item > 2);
// console.log(result);

/******************/
// Array.prototype.myMap = function(callback) {
//    const arr = [];
//     for (let i = 0; i < this.length; i++) {
//            arr.push(callback(this[i], i, this));
//     }
//     return arr;
// };
// const result = [1, 2, 3, 4, 5].myMap(item => item * 2);
// console.log(result);
