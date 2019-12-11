'use strict';

const fn = (arg1, arg2, arg3,) => {
  console.log({
    arg1,
    arg2,
    arg3,
  });
};

fn(...['val1', 'val2', ], 'val3',);
