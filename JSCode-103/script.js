// -------------------------------------------------Assignment103------------------------------------------
/**
 * Delete keys from Pair which are present in keys array
 * @param {*} Pair: An object consisting of key value pairs
 * @param {*} keys : keys which has to be deleted from object
 */

function deleteKeys(Pair, keys) {
  for (const [key, value] of Object.entries(Pair)) {
    if (keys.includes(key)) delete Pair[key];
  }
}

/**
 * check whether number is prime or not
 * @param {*} number : Any valid integer number
 */
function checkPrimeNumber(number) {
  for (let i = 2; i < number / 2; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
/**
 * Check whether number last digit is equal to lastDigit
 * @param {*} number :Any valid integer
 * @param {*} lastDigit  :digit to be compared
 */
function checkLastDigit(number, lastDigit) {
  if (number % 10 === lastDigit) return true;
  else return false;
}
// Array to hold fibaconni pattern
const fibaconni = [];
/**
 * finds fibaconni pattern and store in array Pattern (Tn=Tn-1 + Tn-2)
 * @param {*} number: any valid Integer
 */
function calcFibaconni(number) {
  if (number <= 1) {
    fibaconni[number] = 1;
    return fibaconni[number];
  } else {
    const a = !fibaconni[number - 1]
      ? calcFibaconni(number - 1)
      : fibaconni[number - 1];
    const b = !fibaconni[number - 2]
      ? calcFibaconni(number - 2)
      : fibaconni[number - 2];
    fibaconni[number] = a + b;
    return fibaconni[number];
  }
}

/*
function calculateFibaconni(number, prev, beforePrev)
{
  if (number === 0)
    return;
  else if (number === 1||number===2)
  {
    return 1;
  }
  else
  {
    if (!prev)
      prev=calculateFibaconni(number - 1,prev,beforePrev);
    if (!beforePrev)
      beforePrev = calculateFibaconni(number - 2, prev, beforePrev);
    number = prev + beforePrev;
    return number;
  }
}
*/
/**
 * Check validity whether of number
 * @param {*} number : any valid Integer
 */
function checkValidity(number) {
  return (
    checkPrimeNumber(number) &&
    !checkLastDigit(number, 3) &&
    !checkLastDigit(number, 7) &&
    (checkLastDigit(number, 1) || checkLastDigit(number, 9))
  );
}
/**
 * Generate random number between start and end both inclusive
 * @param {*} start
 * @param {*} end
 */
function generateRandomNumber(start, end) {
  return start + Math.floor(Math.random() * end);
}

//for Printing Random number
function printRandom() {
  let number;
  i = 0;
  console.log("Random numbers:");
  while (true) {
    number = generateRandomNumber(1, 100);
    if (
      (checkLastDigit(number, 9) && number % 3 === 0) ||
      (checkLastDigit(number, 6) && number % 4 === 0)
    )
      break;

    console.log(number);
  }
}

//--------------------------------------------------Inputs-----------------------------------------------------------

//Inputs for part-1
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 9,
};
keys = ["a", "d"];
deleteKeys(obj, keys);
console.log(obj);

//Inputs for part-2
const modifiedObject = { ...obj };
console.log(modifiedObject);

// Inputs for part-3
const number = Number(prompt("Enter the number"), 1);
console.log(checkValidity(number));
if (checkValidity(number)) {
  calcFibaconni(number);
  const result = fibaconni.slice(0, fibaconni.length - 1);
  console.log(result);
} else console.log("Invalid number");

//Input for part-4
printRandom();
