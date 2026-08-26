function exercicio10() {
  let tentativa = 3;
  while (tentativa != 0) {
    const nome = prompt("Insira o nome de usuário \nTentativas restantes: " + tentativa + " tentativas");
    const senha = prompt("Insira a senha do usuário \nTentativas restantes: " + tentativa + " tentativas");

    if (nome === "admin" && senha === "1234") {
      console.log("Acesso permitido!");
      return;
    } else {
      console.log("Acesso negado!");
    }
    tentativa--
  }
}