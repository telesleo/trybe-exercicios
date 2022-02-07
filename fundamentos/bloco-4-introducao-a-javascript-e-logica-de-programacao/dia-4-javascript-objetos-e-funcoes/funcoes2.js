const numeros = [2, 3, 6, 7, 10, 1];

function indiceDoMaiorValor(array)
{
  let indiceDoMaior = 0;

  for (index in array)
  {
    if (array[index] > array[indiceDoMaior])
    {
      indiceDoMaior = index;
    }
  }

  return indiceDoMaior;
}


function indiceDoMenorValor(array)
{
  let indiceDoMenor = 0;

  for (index in array)
  {
    if (array[index] < array[indiceDoMenor])
    {
      indiceDoMenor = index;
    }
  }

  return indiceDoMenor;
}

console.log('O indice do maior número é ' + indiceDoMaiorValor(numeros));
console.log('O indice do menor número é ' + indiceDoMenorValor(numeros));