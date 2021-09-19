/*Задача 3-3

Поиск наибольшего значения среди свойств объекта
Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого 
продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненных задач содержатся как 
свойства объекта в формате "имя":"кол-во задач".*/

//  / ============1 variant==========

const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  const keys = Object.keys(employees);
  const maxValue = Math.max(...values);
  if (keys.length === 0) {
    return '';
  }
  return keys[values.indexOf(maxValue)];
};

// ============2 variant================

// const findBestEmployee = function (employees) {
//   let maxTasks = 0;
//   let bestEmployee = '';
//   const keys = Object.keys(employees);
//   for (const key of keys) {
//     if (maxTasks < employees[key]) {
//       maxTasks = employees[key];
//       bestEmployee = key;
//     }
//   }
//   return bestEmployee;
// };

// ============3 variant==========

// const findBestEmployee = function (employees) {
//   const values = Object.values(employees);
//   const maxValue = Math.max(...values);
//   console.log(maxValue); // 99
//   for (let elem in employees) {
//     if (employees[elem] === maxValue) {
//       console.log(elem); //lorence
//       return elem;
//     }
//   }
// };

// ============4 variant============

// const findBestEmployee = function (employees) {
//   const entries = Object.entries(employees);
//   let total = 0;

//   for (const entry of entries) {
//     if (total < entry[1]) {
//       total = entry[1];
//     }
//   }
//   return total;
// };

// ============5 variant============

// const findBestEmployee = function (employees) {
//   const entries = Object.entries(employees).map(([name, value]) => value);
//   console.log(entries); // [29, 35, 1, 99]
//   return Math.max(...entries);
// };

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers)); // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// console.log(findBestEmployee(supports)); // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };
//console.log(findBestEmployee(sellers)); // 'lux'
