/*Задача 2-3

Поиск самого длинного слова в строке с пробелами
Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку 
(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.*/

// function findLongestWord(string = '') {
//   const array = string.split(' ');
//   console.log(array); // ['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']
//   let longestWord = array[0];

//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length > longestWord.length) {
//       longestWord = array[i];
//     }
//   }
//   return longestWord;
// }

// =============2 variant =============

// function findLongestWord(string = '') {
//   const longestWord = string.split(' ').sort(function (a, b) {
//     return b.length - a.length;
//   });
//   return longestWord[0];
// }

// =============3 variant =============

function findLongestWord(string = '') {
  let theLongestWord = string
    .split(' ')
    .reduce(function (longestWord, currentWord) {
      return currentWord.length > longestWord.length
        ? currentWord
        : longestWord;
    }, '');
  return theLongestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

// console.log(findLongestWord("Google do a roll"));
// // 'Google'

// console.log(findLongestWord("May the force be with you"));
// // 'force'
