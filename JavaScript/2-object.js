'use strict';

const person = {
  name: 'Marcus Aurelius',
  born: 121,
  city: 'Roma',
  position: 'emperor',
};
console.dir({ person });

// Object.values(object)
{
  const values = Object.values(person);
  console.dir({ values });
}

// Object.keys(object)
{
  const keys = Object.keys(person);
  console.dir({ keys });
}

// Object.entries(object)
{
  const entries = Object.entries(person);
  console.dir({ entries });
}

// Object.fromEntries(object)
{
  const entries = [
    ['name', 'Marcus Aurelius'],
    ['born', 121],
    ['city', 'Roma'],
    ['position', 'emperor'],
  ];
  const object = Object.fromEntries(entries);
  console.dir({ object });
}
