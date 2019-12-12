'use strict';

// Symbol.iterator
{
  const iterable = [1, 2, 3];
  const iter = iterable[Symbol.iterator]();
  console.log({ iter });
}

// Symbol.asyncIterator
{
  const asyncIterable = {
    array: [1, 2, 3],
    async *[Symbol.asyncIterator]() {
      yield this.array.shift();
      yield this.array.shift();
      yield this.array.shift();
    }
  };
  const iter = asyncIterable[Symbol.asyncIterator]();
  console.log({ iter });
}
