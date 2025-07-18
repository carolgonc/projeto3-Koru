// Exercícios com loops

// Loop for básico
console.log("Contando de 1 a 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Loop for com break
console.log("\\nLoop com break:");
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("Encontrei o 6, parando o loop!");
        break;
    }
    console.log(i);
}

// Loop for com continue
console.log("\\nPulando números pares:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Pula o resto da iteração
    }
    console.log(i);
}

// Iterando sobre arrays
const fruits = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];
console.log("\\nLista de frutas:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruta ${i+1}: ${fruits[i]}`);
}

// a) Tabuada do 7
console.log("\nTabuada do 7:");
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// b) Soma de um array de números
const numeros = [5, 8, 12, 3, 7];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log("\nSoma dos números:", soma);

// c) Menor valor em um array de números
let menor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}
console.log("Menor valor do array:", menor);