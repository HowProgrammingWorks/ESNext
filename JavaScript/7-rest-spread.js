'use strict';

// Rest

const f = (a, b, ...array) => {
  console.dir({ a, b, array });
};

const g = ({ a, b, ...obj }) => {
  console.dir({ a, b, obj });
};

const obj = { name: 'marcus', born: 121 };
const { name, ...rest } = obj;
console.dir({ obj, name, rest });

// Spread

const array = [3, 4, 5];
f(1, 2, ...array);

g({ a: 1, b: 2, c: 3, d: 4 });

const obj1 = { name: 'marcus', born: 121 };
const obj2 = { name, ...obj1 };
console.dir({ obj2 });

const clone = { ...obj1 };
console.dir({ clone });
