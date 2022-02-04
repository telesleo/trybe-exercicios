let maiorPrimo = 0;
let isPrime = true;

for (let index = 1; index <= 50; index++)
{
  isPrime = true;

  for (let index2 = 2; index2 < index; index2++)
  {
    if (index % index2 == 0)
    {
      isPrime = false;
    }
  }

  if (isPrime && index > maiorPrimo)
  {
    maiorPrimo = index;
  }
}

console.log(maiorPrimo);