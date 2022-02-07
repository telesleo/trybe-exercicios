function eFinalDaPalavra(palavra, finalDaPalavra)
{
  string = '';

  for (let index = palavra.length - 1; index >= palavra.length - finalDaPalavra.length; index--)
  {
    string = palavra[index] + string;
  }

  if (finalDaPalavra == string)
  {
    return true;
  }
  
  return false;
}

console.log(eFinalDaPalavra('porcoespinho', 'espinho'));