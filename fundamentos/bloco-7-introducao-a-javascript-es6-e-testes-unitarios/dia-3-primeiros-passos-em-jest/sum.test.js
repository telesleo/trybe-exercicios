const functions = require('./sum');

describe('Testes de soma', () => {
  it(`espera que a soma de 4 + 5 seja 9`, () => {
    expect(functions.sum(4, 5)).toBe(9);
  });
  it(`espera que a soma de 0 + 0 seja 0`, () => {
    expect(functions.sum(0, 0)).toBe(0);
  });
  it(`espera que a soma de 4 + '5' retorne erro: 'parameters must be numbers'`, () => {
    expect(() => {functions.sum(4, '5')}).toThrow('parameters must be numbers');
  });
});

describe('Testes de remoção de item da array', () => {
  it('verifica se 3 é removido da array', () => {
    expect(functions.myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('verifica se 3 é removido da array', () => {
    expect(functions.myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('verifica se 3 é removido da array', () => {
    expect(functions.myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe(`Testes da função myFizzBuzz`, () => {
  it(`verifica se 15 returna fizzbuzz`, () => {
    expect(functions.myFizzBuzz(15)).toEqual('fizzbuzz');
  });
  it(`verifica se 6 returna fizz`, () => {
    expect(functions.myFizzBuzz(6)).toEqual('fizz');
  });
  it(`verifica se 10 returna buzz`, () => {
    expect(functions.myFizzBuzz(10)).toEqual('buzz');
  });
  it(`verifica se 7 returna 7`, () => {
    expect(functions.myFizzBuzz(7)).toEqual(7);
  });
  it(`verifica se 7 returna 7`, () => {
    expect(functions.myFizzBuzz(7)).toEqual(7);
  });
  it(`verifica se '7' returna false`, () => {
    expect(functions.myFizzBuzz('7')).toEqual(false);
  });
});