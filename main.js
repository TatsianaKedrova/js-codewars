//Find the divisors!

function divisors(number) {
  let arrOfDivisors = [];

  if (number <= 1) return;

  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        arrOfDivisors.push(i);
      }
    }
  }
    return arrOfDivisors.length ? arrOfDivisors : `${number} is prime`;
}
console.log(divisors(18));
