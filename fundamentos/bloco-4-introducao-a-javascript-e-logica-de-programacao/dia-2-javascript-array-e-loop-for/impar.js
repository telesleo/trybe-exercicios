let numbers = [6, 10, 4, 20, 70, 8, 100, 2, 36, 28];

let impares = 0;

for (let index = 0; index < numbers.length; index += 1)
{
  if (numbers[index] % 2 == 1)
  {
    impares += 1;
  }
}

if (impares > 0)
{
  console.log("O número de impares é " + impares);
}
else
{
  console.log("nenhum valor ímpar encontrado");
}