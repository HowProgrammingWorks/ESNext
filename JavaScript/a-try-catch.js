'use strict';

try {
  throw new Error('message');
} catch {
  console.log('no arguments catched');
}
