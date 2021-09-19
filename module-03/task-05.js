/*Задание 3-5

Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства. Возвращает
массив значений определенного свойства prop из каждого объекта в массиве.*/

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1280, quantity: 2 },
  { name: 'Радар', price: 1320, quantity: 1 },
  { name: 'Сканер', price: 2700, quantity: 1 },
  { name: 'Сканер', price: 2500, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

// const getAllPropValues = function (arr, prop) {
//   const newArr = [];
//   for (let product of arr) {
//     for (let key in product) {
//       if (key === prop) {
//         newArr.push(product[prop]);
//       }
//     }
//   }
//   return newArr;
// };

// ======2 variant=======

// const getAllPropValues = function (array, prop) {
//   const arrayProps = [];
//   for (let product of array) {
//     if (product[prop] !== undefined) {
//       arrayProps.push(product[prop]);
//     }
//   }
//   return arrayProps;
// };

// =========3 variant================

// const getAllPropValues = function (array, prop) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let key in array[i]) {
//       if (key === prop) {
//         newArray.push(array[i][prop]);
//       }
//     }
//   }
//   return newArray;
// };

// ==========4 variant=========

const getAllPropValues = function (array, prop) {
  let newArray = [];
  for (let element of array) {
    element[prop] !== undefined ? newArray.push(element[prop]) : newArray;
  }
  return newArray;
};

/* Вызовы функции для проверки работоспособности твоей реализации. */

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 2, 1, 1, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
