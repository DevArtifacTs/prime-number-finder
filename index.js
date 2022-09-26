const prompt = require("prompt-sync")({ sigint: true });

const firstPrimeNumber = 2;
let nextNumber = 3;
let isPrime = true;
let primeArray = [];

const primePosition = prompt("input prime position");

primeArray.push(firstPrimeNumber);
while (primeArray.length < primePosition) {
  for (let i = firstPrimeNumber; i < nextNumber; i++) {
    if (nextNumber % i === 0) {
      isPrime = false;
    }
  }

  if (isPrime) {
    primeArray.push(nextNumber);
    nextNumber++;
  } else {
    isPrime = true;
    nextNumber++;
  }
}
console.log(`primeArray: `, primeArray);
console.log(`prime at ${primePosition}: `, primeArray[primeArray.length - 1]);
