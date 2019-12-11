'use strict';

const fn = async (a, b, c) => {
  // do something
  const aValue = await { then: r => r([a, b, c]) };
  // do something
  return aValue;
};

(async () => {
  const result = await fn(1, 2, 3);
  console.log({ result });
})();
