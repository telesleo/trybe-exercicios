function reverse(word)
{
  let finalWord = '';
  
  for (let index = word.length - 1; index >= 0; index--)
  {
    finalWord += word[index];
  }

  return finalWord;
}

function ePalindromo (palavra)
{
  if (palavra == reverse(palavra))
  {
    return true;
  }

  return false;
}

console.log(ePalindromo('arara'));