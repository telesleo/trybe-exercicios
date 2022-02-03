let numbers = [5, 9, 3, 19, 70, 8, 5, 2, 10, 10];

let soma = 0;

for (let index = 0; index < numbers.length; index += 1)
{
  soma += numbers[index];
}

let media = soma / numbers.length;

if (media > 20)
{
  console.log("valor maior que 20");
}
else
{
  console.log("valor menor ou iqual a 20");
}