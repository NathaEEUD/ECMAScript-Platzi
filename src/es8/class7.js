/**
 * Async Await
 */
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true ? setTimeout(() => resolve('Hello World!'), 3000) : reject(new Error('Test Error'));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log('hello -> ', hello);
};

helloAsync();

// good practice
const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log('hello -> ', hello);
  } catch (error) {
    console.log('error -> ', error);
  }
};

anotherFunction();
