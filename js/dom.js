const btnFundamentos = document.getElementById("fundamentos");
const btnExercicio = document.getElementById("exercicio");
const dynamicBody = document.getElementById("dynamicBody");


function apresentaFundamentos() {
  dynamicBody.innerHTML = `
  <div class="bg-[#d9d9d9] max-w-[50vw] p-[8px]">
        <h2 class="text-2xl text-center font-semibold">Fundamentos Web</h2>
      <div>
        <h3 class="text-lg font-medium">Definição de página estática: </h3>
        <p>
          Pagina estática é uma página onde os dados presentes nela vem direto
          do arquivo, não existe nenhum dado dinamico vindo de um banco ou API
          externa
        </p>
      </div>
      <div>
        <h3 class="text-lg font-medium">Definição de página dinâmica: </h3>
        <p>
          Paginas dinâmicas, trás dados que vem de fontes externas, e muda em
          tempo real conforme as ações do usuário ou dados alterados externamente
        </p>
      </div>
      <div>
        <h3 class="text-lg font-medium">Exemplos de páginas estáticas: </h3>
        <ul class="flex flex-col ml-8">
          <li class="list-disc">Landing Page</li>
          <li class="list-disc">Documentações</li>
          <li class="list-disc">Portfolio</li>
          <li class="list-disc">Sites institucionais simples</li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-medium">Exemplos de páginas dinâmicas: </h3>
        <ul class="flex flex-col ml-8">
          <li class="list-disc">Redes Sociais</li>
          <li class="list-disc">Lojas Virtuais</li>
          <li class="list-disc">Plataformas de Vídeo</li>
          <li class="list-disc">Portais de Notícias (G1, UOL)</li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-medium">Caminho entre navegador, servidor e reposta: </h3>
        <ol class="flex flex-col ml-8">
          <li class="list-decimal">Navegador envia uma requisição para o servidor do tipo JSON</li>
          <li class="list-decimal">Servidor recebe a Requisição </li>
          <li class="list-decimal">Servidor lê os parametros e converte para a linguagem usada</li>
          <li class="list-decimal">Processa a requisição</li>
          <li class="list-decimal">Retorna a resposta conforme as regras de negócio e o que foi pedido pelo usuário</li>
        </ol>
      </div>
      </div>
  `
}

function apresentaExercicios() {
  dynamicBody.innerHTML = `
  <div class="flex bg-[#ccc] py-8 justify-center flex-wrap max-w-[50vw] gap-4">
          <button class="px-4 py-2 bg-[#ddd]" onclick="exercicio1()">Exercicico 1</button>
          <button class="px-4 py-2 bg-[#ddd]" onclick="exercicio2()">Exercicico 2</button>
          <button class="px-4 py-2 bg-[#ddd]" onclick="exercicio3()">Exercicico 3</button>
          <button class="px-4 py-2 bg-[#ddd]" onclick="exercicio4()">Exercicico 4</button>
          <button class="px-4 py-2 bg-[#ddd]" onclick="exercicio5()">Exercicico 5</button>
          <button class="px-4 py-2 bg-[#ddd]" onclick="exercicio6()">Exercicico 6</button>
          <button class="px-4 py-2 bg-[#ddd]" onclick="exercicio7()">Exercicico 7</button>
          <button class="px-4 py-2 bg-[#ddd]" onclick="exercicio8()">Exercicico 8</button>
          <button class="px-4 py-2 bg-[#ddd]" onclick="exercicio10()">Exercicico 10</button>
          <button class="px-4 py-2 bg-[#ddd]" onclick="exercicio11()">Exercicico 8</button>
          <button class="px-4 py-2 bg-[#ddd]" onclick="desafioFinal()">Desafio Final</button>
  </div>
  `
}