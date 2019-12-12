'use strict';

{
  const p1 = Promise.resolve('p1');

  const p2 = new Promise(resolve => {
    setTimeout(resolve, 1000, 'p2');
  });

  const p3 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'p3');
  });

  Promise.all([p1, p2, p3]).then(values => {
    console.log(values);
  });
}

// node:26549) UnhandledPromiseRejectionWarning: p3
// (node:26549) UnhandledPromiseRejectionWarning: Unhandled promise rejection.
// This error originated either by throwing inside of an async function
// without a catch block, or by rejecting a promise which was not handled with
// .catch(). (rejection id: 1)
// (node:26549) [DEP0018] DeprecationWarning: Unhandled promise rejections
// are deprecated. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.

{
  const p1 = Promise.resolve('p1');

  const p2 = new Promise(resolve => {
    setTimeout(resolve, 1000, 'p2');
  });

  const p3 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'p3');
  });

  Promise.allSettled([p1, p2, p3]).then(values => {
    console.log(values);
  });
}

// [
//   { status: 'fulfilled', value: 'p1' },
//   { status: 'fulfilled', value: 'p2' },
//   { status: 'rejected', reason: 'p3' }
// ]
