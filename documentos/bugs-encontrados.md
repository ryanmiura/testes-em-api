# Bugs Encontrados
![alt text](../assets/banners/bugs.png)
## Endpoint /Movies
### ROTA POST /Movies
- 001 - Quando cria um filme com sucesso não retorna uma mensagem de sucesso, apenas o status code 200
- 002 - Ao tentar criar um novo filme com um título já existente, o sistema não retorna um erro apropriado. Em vez disso, ele cria um novo filme com o mesmo título, o que pode levar a duplicação de dados.
- 003 - Não está protegida por autenticação, criando um filme independente do usuario que solicitou a requisição
- 004 - Não possui uma resposta 400 para informar que o titulo ja existe no banco de dados
- 005 - No campo de datas, aceita qualquer strings, o que pode gerar inconsistências no banco de dados.


### ROTA GET /Movies

### ROTA PUT /Movies
- 006 - Não está protegida por autenticação 
- 007 - No campo de datas, aceita qualquer strings, o que pode gerar inconsistências no banco de dados.
- 008 - Em todos os campos aceita qualquer tipo de entrada, numeros, strings vazias, sem qualquer tipo de validaçao ou mensagem de erro.

### ROTA DELETE /Movies
- 009 - Não está protegida por autenticação 
- 010 - Ao excluir um filme não retorna uma mensagem de sucesso, apenas o status code 200
- 011 - Resposta de sucesso não é igual à descrita na documentação, ele retorna 200, e está documentado 201

## Endpoint /Tickets
### ROTA POST /Tickets
- 012 - É possivel criar mais de um ticket com o mesmo seatNumber e movieId
- 013 - O campo movieId, não possui nenhuma validação, aceitando qualquer tipo de entrada, numeros, strings vazias, sem qualquer tipo de validaçao ou mensagem de erro.
- 014 - O campo UserId, não possui nenhuma validação
- 015 - O campo showtime, não possui nenhuma validação
- 016 - É possivel criar um ticket com um movieId que não existe no banco de dados
- 017 - É possivel criar um ticket com um userId que não existe no banco de dados
### ROTA GET /Tickets

### ROTA PUT /Tickets
- 020 - É possivel atualizar o campo seatNumber com um numero que ja existe no banco de dados para o mesmo movieId
- 021 - Atualizar o campo movieId, não possui nenhuma validação, aceitando qualquer tipo de entrada, numeros, strings vazias, sem qualquer tipo de validaçao ou mensagem de erro.
- 022 - Atualizar o campo UserId, não possui nenhuma validação
- 023 - Atualizar o campo showtime, não possui nenhuma validação
- 024 - É possivel atualizar o campo movieId com um id que não existe no banco de dados
- 025 - É possivel atualizar o campo userId com um id que não existe no banco de dados
- 026 - É possivel atualizar o campo seatNumber com um numero que ja existe no banco de dados para o mesmo movieId

### ROTA DELETE /Tickets
- 027 - Ao excluir um ticket não retorna uma mensagem de sucesso, apenas o status code 200


