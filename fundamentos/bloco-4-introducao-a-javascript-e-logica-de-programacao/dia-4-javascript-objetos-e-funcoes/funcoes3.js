const numeros = [2, 4, 6, 7, 10, 0, -3];

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

console.log('O indice do menor número é ' + indiceDoMenorValor(numeros));