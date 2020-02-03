/**
 * Array Flat Method
 */
let array = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
console.log('array flat -> ', array.flat(1));
console.log('array flat -> ', array.flat(2));

/**
 * Array FlatMap Method
 */
let arr = [1, 2, 3, 4, 5];
console.log(
  'array flatMap -> ',
  arr.flatMap(num => [num, num * 2])
);

/**
 * String TrimStart and TrimEnd Methods
 */
let hello = '     Hello World!';
console.log('hello -> ', hello);
console.log('hello -> ', hello.trimStart());

hello = 'Hello World!      '
console.log('hello -> ', hello);
console.log('hello -> ', hello.trimEnd());

/**
 * Catch Err Optional
 */
try {

} catch () {
  console.log('error -> ', error);
}

/**
 * Array to Object
 */
let entries = [['name', 'Oscar'], ['age', 32]]
console.log('object -> ', Object.fromEntries(entries));

/**
 * Symbol
 */
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol)
console.log('symbol -> ', symbol.description);