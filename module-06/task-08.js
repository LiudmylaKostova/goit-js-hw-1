import { default as usersData } from './users.js';

/* Задание 6-8

Получи массив имен всех пользователей у которых есть друг с заданным именем.

Используй ДП для параметра функции {friends} и ({name}) без пробелов и переносов на новую строку

Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя 
использовать for, splice, push и т.п. мутирующие методы. */

const getUsersWithFriend = (array, friendName) =>
  array
    .filter(({ friends }) => friends.includes(friendName))
    .map(({ name }) => name);

console.log(getUsersWithFriend(usersData, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(usersData, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
