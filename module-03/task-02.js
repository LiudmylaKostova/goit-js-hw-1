// Задача 3-2

/*Подсчет количества свойств в обьекте
Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество
свойств в обьекте*/

// const countProps = function (obj) {
//   let count = 0;
//   for (const key in obj) {
//     console.log(key);
//     count++;
//   }
//   return count;
// };

// ========2 variant============

const countProps = function (obj) {
  const keys = Object.keys(obj);
  return keys.length;
};

/* Вызовы функции для проверки работоспособности твоей реализации. */

console.log(countProps({})); // 0
console.log(countProps({ name: 'Mango', age: 2 })); // 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); //3
