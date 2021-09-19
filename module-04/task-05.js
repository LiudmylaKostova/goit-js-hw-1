/*Задача 4-5

Исправь ошибки которые будут в консоли, чтобы скрипт заработал. */

// const inventory = {
//   items: ['Knife', 'Gas mask'],

//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`); // Adding Medkit to inventory
//     this.items.push(itemName);
//   },

//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`); // Removing Gas mask from inventory
//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   //  Invoking action on Medkit
//   //  Invoking action on Gas mask
//   action(itemName);
// };

// invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// console.log(inventory.items); // ['Knife', 'Medkit']

// ==============2 variant=============

/*bind для замены this в методах объекта
Оформи вызов метода invokeInventoryAction таким образом, чтобы в качестве this для методов
inventory.add и inventory.remove выступал объект inventory*/

const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    this.items.push(itemName);
    return `Adding ${itemName} to inventory`;
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
    return `Removing ${itemName} from inventory`;
  },
};

const invokeInventoryAction = function (itemName, action) {
  const act = action(itemName);
  const msg = `Invoking action on ${itemName}`;
  return { act, msg };
};

const invokeAdd = invokeInventoryAction(
  'Medkit',
  inventory.add.bind(inventory),
);
const arrayAdd = [...inventory.items];

console.log(invokeAdd); //{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }
console.log(arrayAdd); // ['Knife', 'Gas mask', 'Medkit']

const invokeRemove = invokeInventoryAction(
  'Gas mask',
  inventory.remove.bind(inventory),
);

const arrayRemove = [...inventory.items];

console.log(invokeRemove); // {act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask'}
console.log(arrayRemove); //["Knife", "Medkit"];
