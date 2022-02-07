const nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorPalavra(array)
{
  let maiorPalavra = array[0];

  for (index in array)
  {
    if (array[index].length > maiorPalavra.length)
    {
      maiorPalavra = array[index];
    }
  }

  return maiorPalavra;
}

console.log(maiorPalavra(nomes));