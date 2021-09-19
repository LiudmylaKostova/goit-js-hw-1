import { default as usersData } from './users.js';

/* Задание 6-5

Получить пользоваля (не массив) по email (поле email, он уникальный).*/

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email); // без ДП
};

// const getUserWithEmail = (users, mail) => {
//   return users.find(({ email }) => email === mail); // с ДП
// };

console.log(getUserWithEmail(usersData, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(usersData, 'elmahead@omatom.com'));
