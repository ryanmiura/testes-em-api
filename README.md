# Testes na API Cinema
![alt text](assets/banners/h1.png)
## 👦🏻 Sobre mim 
<img src="https://media.licdn.com/dms/image/v2/D4D03AQF9dbDOzAUakA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692820968301?e=1736985600&v=beta&t=LgqxUnnGuiQcFvvi5FxWPBQWlY3z34rcsFa3V7ohxyQ" width="100" height="100" align="right">

####  Ryan Miura Carrasco, 22 anos, 6° periodo Engenharia de Software UTFPR-Cornelio Procopio
#### PB: Quality AI 1B
#### Scrum Master: Celso Leonardo


## 📃 Conteudos
### 1. [**Manual de instalação e configuração**](./documentos/manual-de-instalacao.md)
### 2. [**Plano de testes**](./documentos/plano-de-testes.md)
### 3. [**Melhorias feitas e sugeridas**](./documentos/melhorias.md)
### 4. [**Bugs encontrados**](./documentos/bugs-encontrados)
### 5. **TESTES**
#### 5.1. [**Testes Unitario - Newman**](./newman/CinemaAPI.postman_collection.json)
#### 5.2. [**Testes de Integração - Playwright**](./playwright/tests/integracao.spec.js)
#### 5.3. [**Testes End to End - Cypress**](./cypress/cypress/e2e/api.spec.cy.js)
### 6. [**Métricas e Resultados**](./documentos/metricas.md)

## Documentação da API do Cinema

Esta API permite gerenciar filmes e ingressos de cinema.

### Rotas de Filmes

**GET /movies**

Retorna uma lista de todos os filmes.

**GET /movies/:id**

Retorna um filme específico pelo ID.

**POST /movies**

Cria um novo filme.

**PUT /movies/:id**

Atualiza um filme existente.

**DELETE /movies/:id**

Exclui um filme.


### Rotas de Ingressos

**GET /tickets**

Retorna uma lista de todos os ingressos.

**GET /tickets/:id**

Retorna um ingresso específico pelo ID.

**POST /tickets**

Cria um novo ingresso.

**PUT /tickets/:id**

Atualiza um ingresso existente.

**DELETE /tickets/:id**

Exclui um ingresso.

## 🙏 Agradecimentos 🙏
Principalmente ao Scrum Master Celso e à todos meus colegas bolsistas que sempre estão à disposição para tirar duvidas e compartilhar conhecimento 