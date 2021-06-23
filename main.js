function divisors(number) {
  let isPrime = true;
  let arrOfDivisors = [];

  if (number <= 1) return;

  // if (number > 1) {
  //   for (let i = 2; i < number; i++) {
  //     if (number % i === 0) {
  //       isPrime = false;
  //       break;
  //     }
  //   }
    
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        arrOfDivisors.push(i);
      }
    }
if(arrOfDivisors.length === 0 ) {
  console.log(`${number} is prime`);
}
else {
  return arrOfDivisors;
}

  //   console.log(arrOfDivisors);

  //   if (isPrime) {
  //     console.log(`${number} is prime`);
  //   } else {
  //     console.log(`${number} is not prime cos isPrime is ${isPrime}`);
  //   }
  // }
}

console.log(divisors(0));
