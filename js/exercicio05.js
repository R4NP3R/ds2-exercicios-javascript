function exercicio5() {
  const idade = Number(prompt("Insira sua idade: "));
  
  if (idade < 1 || typeof idade != "number" || isNaN(idade)) {
    console.log("Idade Inválida");
    return;
  }

  if (idade < 16) {
    console.log("Não pode votar")
  } else if (idade < 18) {
    console.log("Voto opcional")
  } else {
    console.log("Voto obrigatório")
  }

}