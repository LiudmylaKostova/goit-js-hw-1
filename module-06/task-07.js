import { default as usersData } from './users.js';

/* Задание 6-7

Получи общую сумму баланса (сумму значений свойства balance) всех пользователей.

Используй ДП для параметра функции {balance} без пробелов и переносов на новую строку

Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя
использовать for, splice, push и т.п. мутирующие методы.*/

// const calculateTotalBalance = users => {
//   return users.reduce((acc, element) => (acc += element.balance), 0); // без ДП
// };

// const calculateTotalBalance = (array) =>
//   array.reduce((acc, { balance }) => acc + balance, 0); // с ДП

// =======2 variant======

const calculateTotalBalance = users => {
  let total = 0;
  users.map(user => {
    total += user.balance;
  });
  return total;
};

console.log(calculateTotalBalance(usersData)); // 20916
