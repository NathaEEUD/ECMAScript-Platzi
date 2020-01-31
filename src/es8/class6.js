/**
 * Object Entries and Values and Trailing Commas
 */
const data = {
  frontend: 'Oscar',
  backend: 'Isabel',
  design: 'Ana'
};
const entries = Object.entries(data);
console.log('entries -> ', entries);
console.log('entries length -> ', entries.length);

const values = Object.values(data);
console.log('values -> ', values);
console.log('values length -> ', values.length);

/**
 * Padding
 */
const str = 'hello';
console.log('padStart -> ', str.padStart(7, 'hi'));
console.log('padEnd -> ', str.padEnd(12, ' ------'));
console.log('padEnd -> ', 'food'.padEnd(12, '  ------'));
