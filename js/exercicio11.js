function exercicio11() {
  let operacao = Number(prompt('Selecione a operação \n' + '1: Somar\n' + '2: Calcular Media\n' + '3: Classificar Media\n' + '4: Criar Saudacao\n' + '(0: cancelar)'));

  switch (operacao) {
    case 1:
      let num1 = Number(prompt('Insira o primeiro valor da soma'));
      if (isNaN(num1)) {
        alert("Insira um número válido")
      }
      let num2 = Number(prompt('Insira o segundo valor da soma '));
      if (isNaN(num2)) {
        alert("Insira um número válido")
      }
      let soma = somar(num1, num2);
      alert(`Resultado ${num1} + ${num2} = ${soma}`)
      break;
    case 2:
      let med1 = Number(prompt('Insira o primeiro valor da media'));
      if (isNaN(med1)) {
        alert("Insira um número válido")
      }
      let med2 = Number(prompt('Insira o segundo valor da media '));
      if (isNaN(med2)) {
        alert("Insira um número válido")
      }
      let media = calcularMedia(med1, med2);
      alert(`A media do valor total é ${media}`)
      break;
    case 3:
      let classmed1 = Number(prompt('Insira o primeiro valor da media'));
      if (isNaN(classmed1)) {
        alert("Insira um número válido")
      }
      let classmed2 = Number(prompt('Insira o primeiro valor da media'));
      if (isNaN(classmed2)) {
        alert("Insira um número válido")
      }
      let classificao = classificarMedia(classmed1, classmed2);
      alert(classificao)
      break;
    case 4:
      criarSaudacao();
      break;

    default:
      alert("Alou")
  }
}


function somar(num1, num2) {
  return num1 + num2
}

function calcularMedia(num1, num2) {
  let soma = num1 + num2;
  return soma / 2;
}

function classificarMedia(nota1, nota2) {
  let media = (nota1 + nota2) / 2;

  media = media.toFixed(1);

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