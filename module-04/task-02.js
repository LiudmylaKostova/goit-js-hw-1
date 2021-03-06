/*Задача 4-2

Callback функция и метод push
Функция isUniq принимает три параметра - element, index и arr. Функция возвращает true или false в зависимости 
от того встречается ли элемент первый раз в массиве (true) или этот элемент в массиве уже встречался (false).

Функция isEven принимает один параметр - element. Функция возвращает true или false в зависимости от того 
является ли элемент четным числом или нет.

Функция filterArray(array, cb), принимает 1-м параметром array - массив чисел, а вторым параметром 
cb - функцию обратного вызова (callback). Дополни тело функции так, чтобы функция filterArray заполняла 
новый пустой массив numbers только теми элементами из массива array, для которых вызов функции cb вернет true.*/

const isUniq = (element, index, arr) => {
  console.log(arr.indexOf(element) === index);
  return arr.indexOf(element) === index ? true : false;
};

const isEven = element => (element % 2 === 0 ? true : false);

function filterArray(array, cb) {
  let numbers = [];
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) {
      numbers.push(array[i]);
      //   console.log(numbers);
    }
  }
  return numbers;
}

const arr = [1, 2, 3, 4, 5, 1, 2, 5];

console.log(filterArray(arr, isUniq)); //[1, 2, 3, 4, 5]

console.log(filterArray(arr, isEven)); //[2, 4, 2]
