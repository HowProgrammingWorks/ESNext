'use strict';

const f = x => {
  console.log({ x });
};

const g = e => {
  console.log({ e });
};

new Promise(r => r(5))
  .then(f)
  .catch(g)
  .finally(() => {
    console.log('finally');
  });
