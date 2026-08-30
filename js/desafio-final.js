function desafioFinal() { 
  let operacao = 1; let alunos = []; 
  while (operacao == 1) { 
    let nome = prompt("Insira o nome do aluno:"); 
    let curso = prompt("Insira o nome do curso:"); 
    let med1 = Number(prompt("Insira a primeira nota:")); 
    while (isNaN(med1) || med1 < 0 || med1 > 10) { 
      alert("Insira uma nota válida entre 0 e 10."); 
      med1 = Number(prompt("Insira a primeira nota:"));
    } let med2 = Number(prompt("Insira a segunda nota:")); 
    while (isNaN(med2) || med2 < 0 || med2 > 10) { 
      alert("Insira uma nota válida entre 0 e 10."); 
      med2 = Number(prompt("Insira a segunda nota:")); 
    } let media = calcularMedia(med1, med2); 
    let classificacaoAluno = classificarMedia(media); 
    alunos.push({ nome: nome, curso: curso, nota1: med1, nota2: med2, media: media, classificacao: classificacaoAluno }); 
    console.log("----- FICHA DO ALUNO -----"); 
    console.log("Nome:", nome); 
    console.log("Curso:", curso); 
    console.log("Nota 1:", med1); 
    console.log("Nota 2:", med2); 
    console.log("Média:", media); 
    console.log("Situação:", classificacaoAluno); 
    operacao = Number( prompt("Deseja cadastrar outro aluno?\n0: Não\n1: Sim") ); 
    while (isNaN(operacao) || (operacao != 0 && operacao != 1)) { 
      alert("Insira apenas 0 ou 1."); 
      operacao = Number( prompt("Deseja cadastrar outro aluno?\n0: Não\n1: Sim") ); 
    } 
  }
  console.log("Total de alunos cadastrados:", alunos.length); }

function calcularMedia(num1, num2) {
  if (num1 > 10 || num1 < 0) {
    alert("")
  }
  let soma = num1 + num2;
  return soma / 2;
}
function classificarMedia(media) {

  if (media < 5) {
    return `Aluno teve a média de ${media} foi reprovado!`
  } else if (media < 7) {
    return `Aluno teve a média de ${media} está de recuperação!`
  } else {
    return `Aluno teve a média de ${media} foi aprovado!`
  }
}

function criarSaudacao() {
  let nome = prompt("Insira o seu nome: ");
  let idade = prompt("Insira sua idade: ");
  let curso = prompt("Insira o seu curso: ");
  let cidade = prompt("Insira a sua cidade: ");
  alert(`Olá, meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e estou cursando ${curso}`);
}