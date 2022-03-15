function greet(name = 'There!', greeting = 'Hi') {
  return `${greeting} ${name}`;
}

console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'
console.log(greet()); // 'Hi There!'
