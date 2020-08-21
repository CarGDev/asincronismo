const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Do something Async'), 3000)
      : reject(new Error('Test error'))
  });
}

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
}

console.log('Before0');
doSomething();
console.log('After0');

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (error) {
    console.log(error)
  }
}

console.log('Before1');
anotherFunction();
console.log('After1');