// Exercício com estruturas condicionais

// c) Crie uma verificação que diga se uma pessoa pode dirigir (precisa ser maior de idade E ter habilitação)

const age = 18;
const hasLicense = false;

if (age >= 18 && hasLicense === true) {
  console.log(`Você pode dirigir! :)`);
} else {
  console.log(`Você não pode dirigir! :(`);
}
