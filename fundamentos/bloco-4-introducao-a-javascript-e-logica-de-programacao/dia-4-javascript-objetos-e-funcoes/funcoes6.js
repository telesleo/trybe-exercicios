function somaAteNumero(numero)
{
  let soma = 0;

  for (let index = 1; index <= numero; index++)
  {
    soma += index;
  }

  return soma;
}

console.log(somaAteNumero(5));