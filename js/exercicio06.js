function exercicio6() {
  const nome = prompt("Insira o nome do aluno");
  const nota1 = Number(prompt("Insira a nota do 1º semestre"));
  if (nota1 < 0 || isNaN(nota1) || nota1 > 10) {
    console.log("A nota do 1º semestre está inválida");
    return;
  }
  const nota2 = Number(prompt("Insira a nota do 2º semestre"));
  if (nota2 < 0 || isNaN(nota2) || nota2 > 10) {
    console.log("A nota do 2º semestre está inválida");
    return;
  }

  let media = (nota1 + nota2) / 2;

  media = media.toFixed(1);

  if (media < 5) {
    console.log(`Aluno ${nome} teve a média de ${media} foi reprovado!`)
  } else if (media < 7) {
    console.log(`Aluno ${nome} teve a média de ${media} está de recuperação!`)
  } else {
    console.log(`Aluno ${nome} teve a média de ${media} foi aprovado!`)
  }




}