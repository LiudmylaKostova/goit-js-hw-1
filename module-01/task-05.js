/*Задача 1-5

Использование switch, if и методов slice, toUpperCase, toLowerCase
Напиши скрипт имитирующий оформление заказа в избранную страну.
Пользователь может оформить доставку товара к себе в страну, указав ее в переменной countryName . Учти, 
пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'. Поэтому надо 
перезаписать текст переменной countryName так, чтобы первая буква (свойство [0]) была заглавной 
(метод toUpperCase), а остальные буквы(метод slice) были в нижнем регистре(метод toLowerCase).
Переменная message будет выводить сообщение. В эту переменную надо будет записать одно из трех сообщений 
о результате:
const CANCELED_BY_USER = 'Отменено пользователем!'
Доставка в ${} будет стоить ${} кредитов
const NO_DELIVERY = 'В выбранную страну доставка не доступна.
Для определения стоимости (переменная price) или записи сообщения о невозможности доставки используй switch.
В случае, если доставка возможна (цена больше 0), сформируй сообщение о стоимости доставки в указанную страну 
с помощью if.
Ниже приведен список стран и стоимость доставки.

Китай - 100 кредитов
Австралия - 170 кредитов
Индия - 80 кредитов
Ямайка - 120 кредитов*/

// const countryName = null;
let countryName = 'КитаЙ';

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;

if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  countryName =
    countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
  console.log(countryName);

  switch (countryName) {
    case CHINA:
      price = 100;
      break;
    case AUSTRALIA:
      price = 170;
      break;
    case INDIA:
      price = 80;
      break;
    case JAMAICA:
      price = 120;
      break;
    default:
      console.log(NO_DELIVERY);
  }
}

if (price > 0) {
  message = `Доставка в ${countryName} будет стоить ${price} кредитов`;
}
console.log(message);
