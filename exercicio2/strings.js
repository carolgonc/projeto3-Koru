// Exercícios de manipulação de strings

// 1. Declaração e concatenação
const firstName = "Maria";
const lastName = "Silva";
const fullName = firstName + " " + lastName;
console.log("Nome completo:", fullName);

// 2. Template strings (ES6)
const greeting = `Olá, meu nome é ${firstName} ${lastName}!`;
console.log(greeting);

// 3. Propriedades e métodos de strings
console.log("Comprimento do nome:", fullName.length);
console.log("Nome em maiúsculas:", fullName.toUpperCase());
console.log("Nome em minúsculas:", fullName.toLowerCase());

// 1. Extraia o primeiro nome usando slice ou substring
const primeiroNome = fullName.slice(0, fullName.indexOf(" "));
console.log("Primeiro nome:", primeiroNome);

// 2. Verifique se o nome completo contém a letra 'a'
const contemA = fullName.includes("a");
console.log("Contém a letra 'a'?", contemA);

// 3. Substitua "Silva" por outro sobrenome usando replace
const novoSobrenome = "Souza";
const nomeAlterado = fullName.replace("Silva", novoSobrenome);
console.log("Nome alterado:", nomeAlterado);