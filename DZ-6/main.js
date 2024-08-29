// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// const strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
// strings.forEach(str => {
//     console.log(`${str}: ${str.length}`);
// });

/*******************************************************************************/
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// const strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
// strings.forEach(str => {
// console.log(`${str}: ${str.toUpperCase()}`);
// });

/*******************************************************************************/
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// const strings = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// strings.forEach(str => {
// console.log(`${str}: ${str.toLowerCase()}`);
// });
/*******************************************************************************/
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.


// while (str.startsWith(' ')){
//     str = str.slice(1);
// }
// while (str.endsWith(' ')){
//     str = str.slice(0, -1);
// }
// console.log(str);

// более правильный ответ
// let str = ' dirty string   ';
// const s = str.trim();
// console.log(s);
// console.log(s.length);
// console.log(str.length);

/*******************************************************************************/
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// function stringToarray(str){
//     return str.split(' ');
// }
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str);
// console.log(arr);
/*******************************************************************************/
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// let strings = arr.map(arr=> arr.toString());
// console.log(strings);
/*******************************************************************************/
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// function sortNums(arrayOfNums, direction) {
// if(direction === 'ascending') return arrayOfNums.sort((a, b) => a - b);
// if(direction === 'descending') return arrayOfNums.sort((a, b) => b - a);
// }
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));

// или

// let nums = [11,21,3];
// function sortNums(arrayOfNums, direction) {
//     const sort = arrayOfNums.sort((a, b) => a - b);
//     if (direction === 'ascending'){
//         return sort;
//     }
//     if (direction === 'descending'){
//         return sort.reverse();
//     }
// }
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));
/*******************************************************************************/
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let sorts = coursesAndDurationArray.sort((a1, a2) => {
//     return a2.monthDuration - a1.monthDuration;
// });
// console.log(sorts);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filtered = coursesAndDurationArray.filter(course=> course.monthDuration > 5);
// console.log(filtered);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let mapArray = coursesAndDurationArray.map((add, index) => {
//     let obj = {
//         id : index + 1,
//         title : add.title,
//         monthDuration : add.monthDuration
//     }
//     return obj;
// });
// console.log(mapArray)
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// let suits = ['spade', 'diamond', 'heart', 'clubs'];
// let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
// let colors = { spade: 'black', clubs: 'black', diamond: 'red', heart: 'red' };
//
// let deck = [];
//
// for (let suit of suits) {
//     for (let value of values) {
//         deck.push({ suit: suit, value: value, color: colors[suit] });
//     }
// }
// - знайти піковий туз
// let aceOfSpades = deck.find(card => card.suit === 'spade' && card.value === 'ace');
// console.log('Піковий туз:', aceOfSpades);

// - всі шістки
// let OfSix = deck.filter(card => card.value === '6');
// console.log('Шістки:', OfSix);

// - всі червоні карти
//  let OfRed = deck.filter(card => card.color === 'red');
// console.log('червоні карти:', OfRed);
//
// - всі буби
// let OfDiamond = deck.filter(card => card.suit === 'diamond');
// console.log('буби:', OfDiamond);

// - всі трефи від 9 та більше
// let OfClubs = deck.filter(card => {
//     return card.suit === 'clubs' && (
//         card.value >= '9' ||
//         card.value <= '10' ||
//         card.value === 'jack' ||
//         card.value === 'queen' ||
//         card.value === 'king' ||
//         card.value === 'ace'
//     );
// });
// console.log('трефи:', OfClubs);
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let suits = ['spade', 'diamond', 'heart', 'clubs'];
// let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
// let colors = { spade: 'black', clubs: 'black', diamond: 'red', heart: 'red' };
//
// let deck = [];
//
// for (let suit of suits) {
//     for (let value of values) {
//         deck.push({ suit: suit, value: value, color: colors[suit] });
//     }
// }
// let reduces = deck.reduce((acc, card) => {
//     if (card.suit === 'spade') {
//         acc.spades.push(card);
//     } else if (card.suit === 'diamond') {
//         acc.diamonds.push(card);
//     } else if (card.suit === 'heart') {
//         acc.hearts.push(card);
//     } else if (card.suit === 'clubs') {
//         acc.clubs.push(card);
//     }
//     return acc;
// },{spades: [], diamonds: [], hearts: [], clubs: []});
// console.log(reduces)
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// --написати пошук всіх об'єктів, в який в modules є sass
// let filtered = coursesArray.filter(course=> {
//     for (const courseElement of course.modules) {
//         if(courseElement === 'sass'){
//             return true;
//         }
//     }
//     return false;
// });
// console.log(filtered);

// --написати пошук всіх об'єктів, в який в modules є docker
// let filtered = coursesArray.filter(course=> {
//     for (const courseElement of course.modules) {
//         if(courseElement === 'docker'){
//             return true;
//         }
//     }
//     return false;
// });
// console.log(filtered);
