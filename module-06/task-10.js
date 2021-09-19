import { default as usersData } from './users.js';

/* Задание 6-10

Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений 
и они должны быть отсортированы в алфавитном порядке.
 
Слияние массивов:

const odd = [1, 3, 5];
const even = [2, 4, 6];

// 1
[...odd, ...even];
//  [1, 3, 5, 2, 4, 6]

// 2
odd.concat(even)
//  [1, 3, 5, 2, 4, 6]

Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя
использовать for, splice, push и т.п. мутирующие методы. */

const getSortedUniqueSkills = users => {
  return users
    .reduce((acc, user) => {
      acc.push(...user.skills);
      return acc;
    }, [])
    .sort()
    .filter((skill, index, skills) => skills.indexOf(skill) === index);
};
// ===2 variant===

// const getSortedUniqueSkills = users => {
//   const result = users
//     .reduce((allSkills, elem) => {
//       elem.skills.forEach(item => {
//         !allSkills.includes(item) ? allSkills.push(item) : '';
//       });
//       return allSkills;
//     }, [])
//     .sort();

//   return result;
// };

// ===3 variant===

// const getSortedUniqueSkills = users => {
//   return users.reduce(function (allSkills, user) {
//     user.skills.forEach(skill => {
//       if (!allSkills.includes(skill)) {
//         allSkills.push(skill);
//       }
//     });
//     return allSkills.sort();
//   }, []);
// };

console.log(getSortedUniqueSkills(usersData));
