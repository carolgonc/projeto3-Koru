// Exercício com estruturas condicionais

// a) Crie um sistema de classificação de notas: - 0-59: F - 60-69: D - 70-79: C - 80-89: B - 90-100: A

function classifyGrade(grade) {
  if (typeof grade !== "number" || grade < 0 || grade > 100) {
    return "Nota inválida. Por favor, preencha novamente com número entre 0 e 100.";
  }

  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else {
    return "F";
  }
}

const studentGrade = 74;
const classification = classifyGrade(studentGrade);

console.log(`Sua nota final é ${classification}`);
