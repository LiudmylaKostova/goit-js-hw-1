import { default as usersData } from './users.js';
console.log(usersData);

/* Задание 6-1

Получи массив имен всех пользователей (свойство name) используя деструктурирующее присваивание для параметра
функции ({name}) без пробелов и переносов на новую строку.

Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя
использовать for, splice, push и т.п. мутирующие методы.

Деструктурирующее присваивание для параметра функции PS Деструктурирующее присваивание (ДП):

Объект как параметр без ДП

const object = {num : 2}
function getNum (obj) { return obj.num; }
console.log(getNum(object)) // 2

ДП
const object = {num : 2}
// const num  =  object.num;
const { num } = object;
console.log(num) // 2

Объект как параметр c ДП

const object = {num : 2}
//function getNum (obj) { return obj.num; }
function getNum ({num}) { return num; }
console.log(getNum(object)) // 2  */

// const getUserNames = users => {
//   return users.map(user => user.name);  // без ДП
// };
const getUserNames = users => {
  return users.map(({ name }) => name); // c ДП
};

console.log(getUserNames(usersData));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
