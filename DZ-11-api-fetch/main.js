// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
// const cartsDiv = document.getElementById('carts');
// fetch('https://dummyjson.com/carts')
//     .then(value => value.json())
//     .then(cartsObject => {
//         const {carts} = cartsObject;
//             console.log(carts);
//
//         for (const cart of carts) {
//             const div = document.createElement('div');
//             div.classList.add('container');
//             const divInfo = document.createElement('div');
//             divInfo.innerText =
//                 `"total": ${cart.total},
//                 "discountedTotal": ${cart.discountedTotal},
//                 "userId": ${cart.userId},
//                 "totalProducts": ${cart.totalProducts},
//                 "totalQuantity": ${cart.totalQuantity}`
//
//             const ol = document.createElement('ol');
//             for (const product of cart.products) {
//                 const li = document.createElement('li');
//                 const info = document.createElement('p');
//                 info.innerText =
//                     `"id": ${product.id},
//                     "title": ${product.title},
//                     "price": ${product.price},
//                     "quantity": ${product.quantity},
//                     "total": ${product.total},
//                     "discountPercentage": ${product.discountPercentage},
//                     "discountedTotal": ${product.discountedTotal}`
//
//                 const img = document.createElement('img');
//                 img.src = product.thumbnail;
//                 li.append(img, info);
//                 ol.appendChild(li);
//             }
//             div.append(divInfo, ol);
//             cartsDiv.appendChild(div);
//         }
//     });

/**********************************************************************************************************/
//     #whXxOBlYS0H
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

// const url = new URL('https://dummyjson.com/recipes');
// url.searchParams.set('limit', '50');
//
// const target = document.getElementsByClassName('target')[0];
// fetch(url)
// .then(value => value.json())
// .then(recipesObject => {
//     const {recipes} = recipesObject;
//     for (const recipe of recipes) {
//         console.log(recipe);
//         const recipeDiv = document.createElement('div');
//         for (const recipeKey in recipe) {
//             if (Array.isArray(recipe[recipeKey])) {
//                 const arrayDiv = document.createElement('div');
//                 const ol = document.createElement('ol');
//                 const array = recipe[recipeKey];
//                 for (const item of array) {
//                     const li = document.createElement('li');
//                     li.innerText = item;
//                     ol.appendChild(li);
//                 }
//                     arrayDiv.appendChild(ol)
//                     recipeDiv.appendChild(arrayDiv);
//                 } else {
//                 if (recipeKey !== 'image') {
//
//                     const keyDiv = document.createElement('div');
//                     keyDiv.innerText = `${recipeKey} : ${recipe[recipeKey]}`
//                     recipeDiv.appendChild(keyDiv);
//                 }
//             }
//         }
//         const img = document.createElement('img');
//         img.src = recipe.image;
//         recipeDiv.appendChild(img);
//
//         target.appendChild(recipeDiv);
//     }
// });