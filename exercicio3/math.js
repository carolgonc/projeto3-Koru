// Exercícios de operações matemáticas

// Operações básicas
const a = 10;
const b = 3;

console.log("Adição:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Módulo (resto):", a % b);
console.log("Exponenciação:", a ** b); // a elevado a b

// Incremento e decremento
let counter = 5;
console.log("Valor inicial:", counter);
console.log("Pós-incremento:", counter++); // Mostra 5, depois incrementa
console.log("Novo valor:", counter);       // Agora mostra 6
console.log("Pré-incremento:", ++counter); // Incrementa primeiro, depois mostra 7
console.log("Valor final:", counter);      // Mostra 7

// Conversão de tipos
const numberAsString = "42";
console.log("String original:", numberAsString, typeof numberAsString);

const convertedNumber = Number(numberAsString);
console.log("Depois de converter:", convertedNumber, typeof convertedNumber);

// a) Calcule a média de 3 números: 15, 25 e 38.
const n1 = 15, n2 = 25, n3 = 38;
const media = (n1 + n2 + n3) / 3;
console.log("Média dos números:", media);

// b) Converta a string "123.45" em um número.
const strNumero = "123.45";
const numeroConvertido = Number(strNumero);
console.log("Número convertido:", numeroConvertido, typeof numeroConvertido);

// c) Arredonde o resultado de 9.7 dividido por 2 para o inteiro mais próximo.
const resultado = 9.7 / 2;
const arredondado = Math.round(resultado);
console.log("Resultado arredondado:", arredondado);