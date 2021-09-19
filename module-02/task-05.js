/*Задача 2-5

Функция предикат возвращает true или false

Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на 
содержание слов spam и sale. Если нашли запрещенное слово то функция возвращает true, если запрещенных слов
нет функция возвращает false. Слова в строке могут быть в произвольном регистре.*/

// function checkForSpam(str) {
//   if (
//     str.toLowerCase().includes('spam') ||
//     str.toLowerCase().includes('sale')
//   ) {
//     return true;
//   }
//   return false;
// }

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// ==================Тернарный оператор===========

// function checkForSpam(str) {
//   str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')
//     ? console.log(true)
//     : console.log(false);
// }
// checkForSpam('Latest technology news'); // false
// checkForSpam('Get best sale offers now!'); // true
// ===============================================

function checkForSpam(str) {
  const result =
    str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')
      ? true
      : false;
  return result;
}
console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true
