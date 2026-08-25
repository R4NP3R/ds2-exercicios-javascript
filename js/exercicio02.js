function exercicio2() {
  const nome = "Rafael Silva Santos";
  let idade = 22;
  const cidade = "Itapevi";
  const matriculado = true;
  const nota = 10

  console.log(`${nome}, tipo:`, typeof nome);
  console.log(`${idade}, tipo: `, typeof idade);
  console.log(`${cidade}, tipo: `, typeof cidade);
  console.log(`${matriculado}, tipo: `, typeof matriculado);
  console.log(`${nota}, tipo: `, typeof nota);
}



/*  As variaveis que foram declaradas como const são imutáveis, no momento da execução do código
    Já as que estão como let podem ser mudadas com o tempo, a idade não é fixa ela sempre vai aumentando
*/