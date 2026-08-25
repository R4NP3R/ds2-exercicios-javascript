function exercicio7() {
  const nome = prompt("Insira o nome de usuário");
  const senha = prompt("Insira a senha do usuário");

  if (nome === "admin" && senha === "1234") {
    console.log("Acesso permitido!");
  } else {
    console.log("Acesso negado!");
  }
  
}


// Quando usamos apenas um sinal igual significa que estamos atribuindo um valor a variável.
// Caso estejamos usando dois ou três sinais de igual isso se torna uma operação relacional onde comparamos dois items