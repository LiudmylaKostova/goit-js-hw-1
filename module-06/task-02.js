import { default as usersData } from './users.js';

/* Задание 6-2

Получить массив объектов пользователей по цвету глаз (поле eyeColor).

Получи массив объектов пользователей, отобранный по цвету глаз (свойство eyeColor), используя ДП для параметра
функции ({eyeColor}) без пробелов и переносов на новую строку.

Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя 
использовать for, splice, push и т.п. мутирующие методы. */

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color); // без ДП
// };

const getUsersWithEyeColor = (users, color) =>
  users.filter(({ eyeColor }) => eyeColor === color); // с ДП

console.log(getUsersWithEyeColor(usersData, 'blue'));
