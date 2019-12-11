'use strict';

// Array.prototype.includes(value[, fromIndex])
{
  const array = [1, 2, 3, 4, 5];
  const indexOf = array.indexOf(3);
  const inArray = array.includes(3);
  console.dir({ indexOf, inArray });
}

// Array.prototype.flat([depth])
{
  const array = [1, [2, [3], 4], 5];
  const array1 = array.flat();
  const array2 = array.flat(2);
  console.dir({ array, array1, array2 });
}

// Array.prototype.flatMap(callback[, thisArg])
{
  const array = [1, [2, [3], 4], 5];
  const array1 = array.flatMap(item => {
    console.dir({ item });
    return item;
  });
  console.dir({ array, array1 });
}

// Array.prototype.sort([compareFunction])
// QuickSort to TimSort
{
  const persons = [
    { name: 'user1', born: 2000 },
    { name: 'user2', born: 2001 },
    { name: 'user3', born: 2001 },
    { name: 'user4', born: 2001 },
    { name: 'user5', born: 2002 },
  ];
  console.dir(persons.sort((a, b) => a.born - b.born));
}
