//Se usara es6
// las promesas son algo que pasaran le prometes al sistema que lo hara "ahorita"
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('Ups!');
    }
  });
};

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err));

  const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => { //Promise siempre es con mayuscula para que funcione
      if (true) {
        setTimeout(() => {
          resolve('True');
        }, 3000);
      } else {
        const error = new Error('Upsi!');
        reject(error)
      }
    });
  };

  somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.error(err));

  //Array de promesas
Promise.all([somethingWillHappen(),somethingWillHappen2()])
  .then(response => {
    console.log('Array of results', response);
  })
  .catch(err => {
    console.error(err);
  })