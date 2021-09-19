/*Задание 3-1
Напиши скрипт, который, для объекта user, последовательно:
добавляет поле mood со значением 'happy'
заменяет значение hobby на 'skydiving'
добавляет поле 'full time' со значением true
заменяет значение premium на false
выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of */

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
user['full time'] = true;

let message = '';

// ===========1 variant============

// const keys = Object.keys(user);
// for (const key of Object.keys(user)) {
//   message += `${key}: ${user[key]}\n`;
// }
// console.log(message);

// ===========2 variant===========

const keys = Object.keys(user);
for (let i = 0; i < keys.length; i += 1) {
  message += `${keys[i]}: ${user[keys[i]]}\n`;
}
console.log(message);
