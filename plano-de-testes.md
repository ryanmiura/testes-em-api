# Testes de Aceitação / Unitarios
# Testes Negativos

## Plano de Testes da API do Cinema

### Objetivo

O objetivo deste plano de testes é garantir que a API do Cinema funcione conforme o esperado e atenda aos requisitos especificados.

### Escopo

O escopo deste plano de testes abrange todas as rotas da API, incluindo as rotas de filmes e ingressos.

### Abordagem

A abordagem de testes será baseada em testes de unidade, integração e ponta a ponta.

### Casos de Teste

#### Rotas de Filmes

| Caso de Teste | Descrição | Método | Rota | Entrada | Saída Esperada |
|---|---|---|---|---|---|
| Listar todos os filmes | Deve retornar uma lista de todos os filmes. | GET | /movies |  | Lista de filmes |
| Obter filme por ID | Deve retornar um filme específico pelo ID. | GET | /movies/:id | ID do filme | Filme correspondente |
| Criar filme | Deve criar um novo filme. | POST | /movies | Dados do filme | Filme criado |
| Atualizar filme | Deve atualizar um filme existente. | PUT | /movies/:id | ID do filme e dados atualizados | Filme atualizado |
| Excluir filme | Deve excluir um filme. | DELETE | /movies/:id | ID do filme | Filme excluído |

#### Rotas de Ingressos

| Caso de Teste | Descrição | Método | Rota | Entrada | Saída Esperada |
|---|---|---|---|---|---|
| Listar todos os ingressos | Deve retornar uma lista de todos os ingressos. | GET | /tickets |  | Lista de ingressos |
| Obter ingresso por ID | Deve retornar um ingresso específico pelo ID. | GET | /tickets/:id | ID do ingresso | Ingresso correspondente |
| Criar ingresso | Deve criar um novo ingresso. | POST | /tickets | Dados do ingresso | Ingresso criado |
| Atualizar ingresso | Deve atualizar um ingresso existente. | PUT | /tickets/:id | ID do ingresso e dados atualizados | Ingresso atualizado |
| Excluir ingresso | Deve excluir um ingresso. | DELETE | /tickets/:id | ID do ingresso | Ingresso excluído |

### Critérios de Aceite

Os critérios de aceite para cada caso de teste serão definidos com base nos requisitos especificados para a API.

### Ferramentas

As ferramentas a serem utilizadas para os testes incluem:

* Jest (para testes de unidade e integração)
* Supertest (para testes de ponta a ponta)

### Cronograma

O cronograma para os testes será definido com base na complexidade da API e na disponibilidade da equipe de testes.

### Responsabilidades

A equipe de desenvolvimento será responsável por implementar os testes de unidade e integração. A equipe de testes será responsável por implementar os testes de ponta a ponta.

### Relatórios

Os relatórios de testes serão gerados após a execução de cada fase de testes. Os relatórios incluirão informações sobre os casos de teste executados, os resultados dos testes e os defeitos encontrados.
