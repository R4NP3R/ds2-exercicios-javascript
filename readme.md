# DSII - Exercicios JS

### Em qual momento uma página dinâmica é processada e por que um banco de dados pode ser necessário?

Depende se a aplicação roda no lado do servidor ou do cliente, caso seja no lado do cliente o JS usa o DOM para trazer os dados de forma dinâmica, e assim os dados são processados pelo servidor mas a página é processada pelo client de forma assíncrona, já quando a aplicação está no lado do servidor quando o usuário faz uma requisição para a página o servidor já envia essa página processada como resposta para o cliente.
O banco de dados pode ser necessário para personalização de dados por usuário, atualização em tempo real (caso o usuário altere algum dado atualiza para o outro) e ajuda na organização de busca por conta da indexação presente no banco de dados.

### Uncaught ReferenceError: Console is not defined - qual o motivo que esse erro ocorre?
Ele ocorre porque dentro do JS temos um objeto nativo, o console, quando tentamos chamar por Console com o C maiúsculo chamamos algo que não existe em JS e por isso da um erro de referencia quando o JS vai buscar por Console. Básicamente estamos tentanto buscar algo que não existe e ocorre o erro acima.