numeros = [2, 3, 2, 4, 8, 2, 4, 4, 4, 7];

function numeroMaisFrequente(array)
{
  let frequencia = {};

  for (number of array)
  {
    let temNumero = false;
    
    if (frequencia[number] > 0)
    {
      frequencia[number] += 1;
    }
    else
    {
      frequencia[number] = 1;
    }
  }

  let keyNumeroMaisFrequente = Object.keys(frequencia)[0];

  for (key in frequencia)
  {
    if (frequencia[key] > frequencia[keyNumeroMaisFrequente])
    {
      keyNumeroMaisFrequente = key;
    }
  }

  return keyNumeroMaisFrequente;
}

console.log(numeroMaisFrequente(numeros));