function sumNumbers(...numbers) {
  return numbers.reduce((result, current) => result + current);
}

console.log(sumNumbers(1, 2, 13));
