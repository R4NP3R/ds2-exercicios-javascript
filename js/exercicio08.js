function exercicio8() {
  const num = Number(prompt("Insira o número que deseja ver a tabuada:"))

  if (isNaN(num)) {
    console.log("Insira um número válido!");
    return;
  }

  for (let i = 1; i <= 10; i++) {
    let multiplicacao = num * i;
    console.log(`${num} x ${i} = ${multiplicacao}`);
  }

}