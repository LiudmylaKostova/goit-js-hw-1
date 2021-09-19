import { default as usersData } from './users.js';

/* Задание 6-3

Получи массив имен пользователей (значение свойства name) по полу (значение свойства gender).

Используй ДП для параметра функции ({name}) без пробелов и переносов на новую строку.

Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя
использовать for, splice, push и т.п. мутирующие методы.*/

// const getUsersWithGender = (users, gender) => {
//   return users.filter(({ gender }) => gender).map(({ name }) => name);
// };

// ===или===

// const getUsersWithGender = (array, gender) =>
//   array.filter(user => user.gender === gender).map(({ name }) => name);

// console.log(getUsersWithGender(usersData, 'male'));

// ===============2 variant====================

const getUsersWithGender = (users, gender) => {
  let arr = [];
  users
    .filter(user => user.gender === gender)
    .forEach(user => {
      arr.push(user.name);
    });
  return arr;
};

console.log(getUsersWithGender(usersData, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
