'use strict';

// Exponentiation

const a = 2;
const b = 3;
const c = Math.pow(a, b);
const d = a ** b;
let e = 2;
e **= b;
console.dir({ a, b, c, d, e });

// Optional chaining

/*

const spqr = {
  emperor: { name: 'Marcus' }
};

console.log(spqr.emperor?.name);
console.log(spqr.president?.name);

*/
