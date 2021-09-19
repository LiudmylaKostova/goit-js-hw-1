/* Задача 5-5

Напиши класс Car с указанными свойствами и методами.
Добавь статический метод `getSpecs(car)`, который принимает объект-машину как параметр и выводит в консоль 
значения свойств maxSpeed, speed, isOn, distance и price. */

class Car {
  static getSpecs({ speed, maxSpeed, price, isOn, distance }) {
    return `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`;
  }
  // ====ИЛИ====
  //   static getSpecs(car) {
  //     return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
  //   }

  //   /*
  //    * Конструктор получает объект настроек.
  //    * Добавь свойства будущеего экземпляра класса:
  //    *  speed - текущая скорость, изначально 0
  //    *  price - цена автомобиля
  //    *  maxSpeed - максимальная скорость
  //    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
  //    *  distance - общий киллометраж, изначально 0
  //    */
  //   constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
  //     this.speed = speed;
  //     this._price = price;
  //     this.maxSpeed = maxSpeed;
  //     this.isOn = isOn;
  //     this.distance = distance;
  //   }
  // ====ИЛИ====
  constructor(object) {
    this.speed = 0;
    this.price = object.price;
    this.maxSpeed = object.maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  //   /*Добавь геттер и сеттер для свойства price, который будет работать с свойством цены автомобиля.*/

  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }

  //   /* Добавь код для того чтобы завести автомобиль. Записывает в свойство isOn значение true */

  turnOn() {
    this.isOn = true;
  }

  //   /* Добавь код для того чтобы заглушить автомобиль. Записывает в свойство isOn значение false,
  //    и сбрасывает текущую скорость в 0 */

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  //   /* Добавялет к свойству speed полученное значение, при условии что результирующая скорость
  //   не больше чем значение свойства maxSpeed */

  accelerate(value) {
    if (value + this.speed < this.maxSpeed) {
      return (this.speed += value);
    } else {
      this.speed === this.maxSpeed;
    }
  }

  //   /*Отнимает от свойства speed полученное значение, при условии что результирующая скорость не меньше нуля*/

  decelerate(value) {
    if (this.speed - value > 0) {
      return (this.speed -= value);
    } else {
      this.speed = 0;
    }
  }

  //   /*Добавляет в поле distance киллометраж (hours * speed), но только в том случае если машина заведена!*/

  drive(hours) {
    if (this.isOn === true) {
      return (this.distance += hours * this.speed);
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang)); // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang)); // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
