/*Задача 1-3

Использование if else
Напиши скрипт имитирующий авторизацию администратора в панели управления.

Есть переменная message в которую надо будет записать одно из трех сообщений о результате:

const CANCELED_BY_USER = 'Отменено пользователем!'
const ACCESS_IS_ALLOWED = 'Добро пожаловать!'
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!'
Выбор одного из трех значений зависит от того, какое значение будет у переменной userPassword (данные,
которые может передать пользователь). 
Возможны такие варианты:

const ADMIN_PASSWORD = 'jqueryismyjam'. При таком значении userPassword переменной message следует присвоить
ACCESS_IS_ALLOWED.
null. При таком значении userPassword переменной message следует присвоить CANCELED_BY_USER.
Любая строка, кроме ADMIN_PASSWORD. При таком значении userPassword переменной message следует присвоить 
ACCESS_DENIED.
Используйте if else if else для написания скрипта.*/

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
const ADMIN_PASSWORD = 'jqueryismyjam';

// let userPassword = 'dhdhdhdh';
let userPassword = null;
let message;

if (userPassword === ADMIN_PASSWORD) {
  message = ACCESS_IS_ALLOWED;
} else if (userPassword === null) {
  message = CANCELED_BY_USER;
} else {
  message = ACCESS_DENIED;
}
console.log(message);
