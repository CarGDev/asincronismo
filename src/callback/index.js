function sum(num1, num2){
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(5,2,sum));

// Version arrows functions

/**
 * Suma
 * @date 2020-05-30
 * @param {Number} num1
 * @param {Number} num2
 * @returns {Number}
 */
const sum2 = (num1, num2) => num1 + num2;

/**
 * Calcular
 * @date 2020-05-30
 * @param {Number} num1
 * @param {Number} num2
 * @param {Function} callback
 * @returns {Number}
 */
const calc2 = (num1, num2, callback) => callback(num1, num2);

//console.log(calc2(6, 2, sum2));

function date(callback) {
  console.log(new Date);
  setTimeout(function () {
    let date = new Date;
    callback(date);
  }, 3000)
}

function printDate (dateNow) {
  console.log(dateNow);
}

date(printDate);
