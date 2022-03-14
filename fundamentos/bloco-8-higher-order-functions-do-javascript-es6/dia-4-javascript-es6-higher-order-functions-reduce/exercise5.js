const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
  const letters = array.reduce((result, current) => result + current.toLowerCase(), '').split('');
  return letters.reduce((result, current) => (current === 'a') ? result + 1 : result, 0);
}

console.log(containsA(names));