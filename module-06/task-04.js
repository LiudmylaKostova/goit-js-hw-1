import { default as usersData } from './users.js';

/* Задача 6-4

Получи массив только неактивных пользователей (отфильтруй по значению свойства isActive)

Используй ДП для параметра функции ({isActive})без пробелов и переносов на новую строку.

Используй оператор !.

Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя
использовать for, splice, push и т.п. мутирующие методы.
Получить массив только неактивных пользователей (поле isActive).*/

const getInactiveUsers = users => {
  return users.filter(({ isActive }) => !isActive).map(({ name }) => name);
};

console.log(getInactiveUsers(usersData)); // ['Moore Hensley', 'Ross Vazquez', 'Blackburn Dotson']
