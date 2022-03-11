const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 1

const getFirstAuthorBornIn1947 = (array) => {
  const book = array.find((book) => book.author.birthYear === 1947);
  return book.author.name;
}

// console.log(getFirstAuthorBornIn1947(books));

// 2

const getShortestBookName = (array) => {
  let shortestBookName = array[0].name;
  array.forEach((book) => {
    if (book.name.length < shortestBookName.length) {
      shortestBookName = book.name;
    }});
  return shortestBookName;
}

// console.log(getShortestBookName(books));

// 3

const getFirstBookWith26Letters = (array) => array.find((book) => book.name.length === 26);

// console.log(getFirstBookWith26Letters(books));

// 5

const everyoneWasBornOnSecXX = (array) => {
  return array.every((book) => book.author.birthYear >= 1900);
}

// console.log(wasEveryAuthorBornInTheXX(books));

// 6

const someBookWasReleaseOnThe80s = (array) => {
  return array.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);
}

// console.log(someBookWasReleaseOnThe80s(books));

// 7

function authorUnique(array) {
  return array.every((book) => {
    array.every((book2) => book2.author.birthYear !== book.author.birthYear
  )});
}

console.log(authorUnique(books));
