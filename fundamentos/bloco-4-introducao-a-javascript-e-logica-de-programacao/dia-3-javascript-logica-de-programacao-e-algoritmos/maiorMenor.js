let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index++)
{
  if (array[index].length > maiorPalavra.length)
  {
    maiorPalavra = array[index];
  }
}

for (let index = 0; index < array.length; index++)
{
  if (array[index].length < maiorPalavra.length)
  {
    menorPalavra = array[index];
  }
}

console.log("A maior palavra é " + maiorPalavra + 
            " e a menor é " + menorPalavra);