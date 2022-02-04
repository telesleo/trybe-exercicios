const numero = 10;
let exponencial = numero;

for (let index = numero - 1; index > 1; index--)
{
  console.log(index);
  exponencial = exponencial * index;
}

console.log(exponencial);