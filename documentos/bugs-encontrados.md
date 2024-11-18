## Endpoint /Movies
### ROTA POST /Movies
- Quando cria um filme com sucesso não retorna uma mensagem de sucesso, apenas o status code 200
- Ao tentar criar um novo filme com um título já existente, o sistema não retorna um erro apropriado. Em vez disso, ele cria um novo filme com o mesmo título, o que pode levar a duplicação de dados.
- Não está protegida por autenticação, criando um filme independente do usuario que solicitou a requisição
- Não possui uma resposta 400 para informar que o titulo ja existe no banco de dados
- No campo de datas, aceita qualquer strings, o que pode gerar inconsistências no banco de dados.


### ROTA GET /Movies

### ROTA PUT /Movies
- Não está protegida por autenticação 
- No campo de datas, aceita qualquer strings, o que pode gerar inconsistências no banco de dados.
- Em todos os campos aceita qualquer tipo de entrada, numeros, strings vazias, sem qualquer tipo de validaçao ou mensagem de erro.

### ROTA DELETE /Movies
- Não está protegida por autenticação 
- Ao excluir um filme não retorna uma mensagem de sucesso, apenas o status code 200
- Resposta de sucesso não é igual à descrita na documentação, ele retorna 200, e está documentado 201

## Endpoint /Tickets
### ROTA POST /Tickets
- É possivel criar mais de um ticket com o mesmo seatNumber e movieId
- O campo movieId, não possui nenhuma validação, aceitando qualquer tipo de entrada, numeros, strings vazias, sem qualquer tipo de validaçao ou mensagem de erro.
- O campo UserId, não possui nenhuma validação
- O campo showtime, não possui nenhuma validação
- É possivel criar um ticket com um movieId que não existe no banco de dados
- É possivel criar um ticket com um userId que não existe no banco de dados
### ROTA GET /Tickets

### ROTA PUT /Tickets
- É possivel atualizar o campo seatNumber com um numero que ja existe no banco de dados para o mesmo movieId
- Atualizar o campo movieId, não possui nenhuma validação, aceitando qualquer tipo de entrada, numeros, strings vazias, sem qualquer tipo de validaçao ou mensagem de erro.
- Atualizar o campo UserId, não possui nenhuma validação
- Atualizar o campo showtime, não possui nenhuma validação
- É possivel atualizar o campo movieId com um id que não existe no banco de dados
- É possivel atualizar o campo userId com um id que não existe no banco de dados
- É possivel atualizar o campo seatNumber com um numero que ja existe no banco de dados para o mesmo movieId

### ROTA DELETE /Tickets
- Ao excluir um ticket não retorna uma mensagem de sucesso, apenas o status code 200

