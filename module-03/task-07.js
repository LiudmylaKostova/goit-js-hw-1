/* Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо
реализовать методы для работы с балансом и историей транзакций.
Типов транзацкий всего два.
Можно положить либо снять деньги со счета. */

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/* Каждая транзакция это объект со свойствами: id, type и amount */

const account = {
  // Текущий баланс счета
  balance: 0,
  // История транзакций
  transactions: [],

  /* Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции. */

  createTransaction(amount, type) {
    if (!this[type]) {
      return 'error';
    }
    this[type](amount);
  },

  /* Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций */

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({
      amount,
      type: 'deposit',
      id: this.transactions.length + 1,
    });
  },

  /* Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции после чего добавляет его в историю транзакций.
   * Если amount больше чем текущий баланс, выводи сообщение о том, что снятие такой суммы не возможно,
   * недостаточно средств. */

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push({
        amount,
        type: 'withdraw',
        id: this.transactions.length + 1,
      });
    } else {
      alert(`There is not enough money to perform this operation`);
    }
  },

  /* Метод возвращает текущий баланс */

  getBalance() {
    return this.balance;
  },

  /* Метод ищет и возвращает объект транзации по id */

  getTransactionDetails(id) {
    this.transactions.map(tr => (tr.id === id ? console.log(tr) : ''));
  },

  /* Метод возвращает количество средств определенного типа транзакции из всей истории транзакций */

  getTransactionTotal(type) {
    let count = 0;
    this.transactions.forEach(tr => {
      if (tr.type === type) {
        count += tr.amount;
        console.log(count);
        console.log(tr);
      }
    });
    return count;
  },
};
account.deposit(500);
account.deposit(1500);
account.withdraw(400);
console.log(account.transactions);
console.log(account.getBalance());
account.getTransactionDetails(3);
console.log(account.getTransactionTotal('deposit'));

// ==========2 variant====================

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// const { DEPOSIT, WITHDRAW } = Transaction;

/* Каждая транзакция это объект со свойствами: id, type и amount */

// const account = {
//   balance: 0,
//   transactions: [],

/* Метод создает и возвращает объект транзакции. Принимает сумму и тип транзакции. */

//   createTransaction(amount, type) {
//     const newTransaction = { id: this.transactions.length + 1, amount, type };
//     this.transactions.push(newTransaction);
//   },

/* Метод отвечающий за добавление суммы к балансу.
 * Принимает сумму танзакции.
 * Вызывает createTransaction для создания объекта транзакции
 * после чего добавляет его в историю транзакций */

//   deposit(amount) {
//     this.balance += amount;
//     this.createTransaction(amount, DEPOSIT);
//   },

/* Метод отвечающий за снятие суммы с баланса. Принимает сумму танзакции.
 * Вызывает createTransaction для создания объекта транзакции после чего добавляет его в историю транзакций.
 * Если amount больше чем текущий баланс, выводи сообщение о том, что снятие такой суммы не возможно,
 * недостаточно средств. */

//   withdraw(amount) {
//     if (this.balance >= amount) {
//       this.balance -= amount;
//       this.createTransaction(amount, WITHDRAW);
//     } else {
//       alert(`There is not enough money to perform this operation`);
//     }
//   },

/* Метод возвращает текущий баланс */

//   getBalance() {
//     return `Your balance is ${this.balance}`;
//   },

/* Метод ищет и возвращает объект транзации по id */

//   getTransactionDetails(id) {
//     for (let tr of this.transactions) {
//       if (tr.id === id) {
//         return tr;
//       }
//     }
//   },

/* Метод возвращает количество средств определенного типа транзакции из всей истории транзакций */

//   getTransactionTotal(type) {
//     let total = 0;
//     this.transactions.forEach(tr => {
//       if (tr.type === type) {
//         total += tr.amount;
//         console.log(total);
//         console.log(tr);
//       }
//     });
//        return `Total of transactions by ${type} is ${total}`;
//   },
// };
// account.deposit(500);
// account.deposit(1500);
// account.withdraw(400);
// console.log(account.transactions);
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(2));
// console.log(account.getTransactionTotal('deposit'));
// console.log(account.getTransactionTotal('withdraw'));
