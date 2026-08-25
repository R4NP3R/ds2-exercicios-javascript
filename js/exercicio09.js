function exercicio9() {
  let numero = -1;
  let soma = 0;
  let maiorNumero = 0;
  let menorNumero;
  let media = 0;
  let qtdVezes = 0;
  while (numero != 0) {
    numero = Number(prompt("Insira um número para ser adicionado a soma (digite 0 para parar)"));    
    soma += numero;
    if(numero > maiorNumero) {
      maiorNumero = numero;
    }
    if (numero != 0) {
      menorNumero = numero;
      qtdVezes++;
    }
    if(numero < menorNumero && numero != 0) {
      menorNumero = numero;
    }
    
  } 

  media = soma / qtdVezes;

  console.log(`A Quantidade de números digitados foi de ${qtdVezes}`)
  console.log(`A Soma dos números digitados foi de ${soma}`)
  console.log(`A a média é de ${media}`)
  console.log(`O maior número digitado foi ${maiorNumero}`)
  console.log(`O menor número digitado foi  ${menorNumero}`)
}