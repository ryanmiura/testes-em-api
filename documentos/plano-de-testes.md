
# Plano de Testes da API do Cinema
![alt text](../assets/banners/plano.png)
## Objetivo

O objetivo deste plano de testes é garantir que a API do Cinema funcione conforme o esperado e atenda aos requisitos especificados.

## Escopo

O escopo deste plano de testes abrange todas as rotas da API, incluindo as rotas de filmes e ingressos.

## Abordagem de testes
- Testes Unitarios: de aceitação e negação com Postman + Newman
- Testes de Integração: com Playwright
- Testes End to End: Com Cypress
- Testes de peformance: Com Jmeter

## Casos de Testes Unitarios

### Rotas de Filmes

| Caso de Teste | Descrição | Método | Rota | Entrada | Saída Esperada |
|---|---|---|---|---|---|
| Listar todos os filmes | Deve retornar uma lista de todos os filmes. | GET | /movies |  | Lista de filmes |
| Obter filme por ID | Deve retornar um filme específico pelo ID. | GET | /movies/:id | ID do filme | Filme correspondente |
| Criar filme | Deve criar um novo filme. | POST | /movies | Dados do filme | Filme criado |
| Atualizar filme | Deve atualizar um filme existente. | PUT | /movies/:id | ID do filme e dados atualizados | Filme atualizado |
| Excluir filme | Deve excluir um filme. | DELETE | /movies/:id | ID do filme | Filme excluído |

### Rotas de Ingressos

| Caso de Teste | Descrição | Método | Rota | Entrada | Saída Esperada |
|---|---|---|---|---|---|
| Listar todos os ingressos | Deve retornar uma lista de todos os ingressos. | GET | /tickets |  | Lista de ingressos |
| Obter ingresso por ID | Deve retornar um ingresso específico pelo ID. | GET | /tickets/:id | ID do ingresso | Ingresso correspondente |
| Criar ingresso | Deve criar um novo ingresso. | POST | /tickets | Dados do ingresso | Ingresso criado |
| Atualizar ingresso | Deve atualizar um ingresso existente. | PUT | /tickets/:id | ID do ingresso e dados atualizados | Ingresso atualizado |
| Excluir ingresso | Deve excluir um ingresso. | DELETE | /tickets/:id | ID do ingresso | Ingresso excluído |

## Teste de integração
1. POST /movies -> GET /movies
2. POST /tickets -> GET /tickets
3. PUT /movies/:id -> GET /movies/:id
4. PUT /tickets/:id -> GET /tickets/:id
5. DELETE /movies/:id -> GET /movies
6. DELETE /tickets/:id -> GET /tickets

## Fluxo de Teste End to End
POST /movies -> GET /movies -> PUT /movies/:id -> GET /movies/:id -> POST /tickets -> GET /tickets -> PUT /tickets/:id -> GET /tickets/:id -> DELETE /tickets/:id -> GET /tickets -> DELETE /movies/:id -> GET /movies

1. POST /movies
2. GET /movies
3. PUT /movies/:id
4. GET /movies/:id
5. POST /tickets
6. GET /tickets
7. PUT /tickets/:id
8. GET /tickets/:id
9. DELETE /tickets/:id
10. GET /tickets
11. DELETE /movies/:id
12. GET /movies

## Ferramentas

As ferramentas a serem utilizadas para os testes incluem:

- Newman + Postman (para automatizar testes de unitarios)
- Playwright (para automatizar testes de integração)
- Cypress (para automatizar testes end to end)
- Jmeter (para testes de carga e stress)


## Cronograma
- 04/11/2024: Início do planejamento de testes
- 06/11/2024: Início dos testes de unidade e integração
- 010/11/2024: Conclusão dos testes de unidade e integração
- 11/11/2024: Início dos testes de ponta a ponta
- 14/11/2024: Conclusão dos testes de ponta a ponta
- 16/11/2024: Coletando metricas e resultados
- 18/11/2024: Entrega dos resultados

## Responsabilidades
- 01 Desenvolvedor: criação da API e futuras correções de bugs
- 01 Analista QA e testes: elaborar planejamento e fazer execução de testes

## Relatórios

Os relatórios de testes serão gerados após a execução de cada fase de testes. Os relatórios incluirão informações sobre os casos de teste executados, os resultados dos testes e os defeitos encontrados.

### 1. [Relatório de bugs encontrados](bugs-encontrados)

### 2. [Melhorias corrigidas e sugeridas](melhorias.md)

