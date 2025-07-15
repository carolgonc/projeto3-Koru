// Desafio final - integrando todos os conceitos

// Dados de alunos com nome, idade e notas
const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];

// a) Calcular a média das notas de cada aluno
students.forEach((student) => {
    const average = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
    student.average = average;
});

// b) Determinar se cada aluno foi aprovado (média >= 70)
students.forEach((student) => {
    student.status = student.average >= 70 ? "Aprovado" : "Reprovado";
    console.log(`${student.name} - Média: ${student.average.toFixed(2)} - Status: ${student.status}`);
});

// c) Contar quantos alunos foram aprovados e reprovados
let approvedCount = 0;
let failedCount = 0;

students.forEach((student) => {
    if (student.status === "Aprovado") {
        approvedCount++;
    } else {
        failedCount++;
    }
});

console.log(`\nTotal de Aprovados: ${approvedCount}`);
console.log(`Total de Reprovados: ${failedCount}`);

// d) Encontrar o aluno com a maior média
let topStudent = students[0];

students.forEach((student) => {
    if (student.average > topStudent.average) {
        topStudent = student;
    }
});

console.log(`\nAluno com maior média: ${topStudent.name} - Média: ${topStudent.average.toFixed(2)}`);

// e) Calcular a média geral da turma
const classAverage = students.reduce((sum, student) => sum + student.average, 0) / students.length;

console.log(`\nMédia geral da turma: ${classAverage.toFixed(2)}`);
