# Bugs Encontrados

## Defeito no codigo
Ao executar a API, fazendo chamada para o endpoint /tickets, em qualquer rota que exigia o ID, constava-se uma falha no sistema, ao analisar o codigo foram encontrados defeitos no arquivo tickets.service.ts, nos metodos findOne(), update() e remove(), onde ao comparar com os metodos do arquivo movies.service.ts, foi possivel identificar que os metodos de tickets não fazem uma chamada adequada do ID e também o uso incorreto das condicionais dentro dos metodos.



## Endpoint /Movies
### ROTA POST /Movies
- **Descrição do Bug:** Ao tentar criar um novo filme com um título já existente, o sistema não retorna um erro apropriado. Em vez disso, ele cria um novo filme com o mesmo título, o que pode levar a duplicação de dados.