'use strict';

// Number
{
  const a = Number.MAX_SAFE_INTEGER;
  const b = a + 1;
  const c = a + 2;
  console.log({ a, b, c });
}

// BigInt
{
  const a = BigInt(Number.MAX_SAFE_INTEGER);
  const b = a + 1n;
  const c = a + 2n;
  console.log({ a, b, c });
}
