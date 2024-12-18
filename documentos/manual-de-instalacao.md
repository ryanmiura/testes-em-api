# Manual de instalação e configuração do projeto
![alt text](../assets/banners/instalacao.png)
## 1. Ferramentas necessarias

### 1.1 Git
Para instalar o Git, acesse o site oficial [https://git-scm.com/downloads](https://git-scm.com/downloads) e baixe a versão para o seu sistema operacional. Em seguida, execute o instalador e siga as instruções na tela para concluir a instalação. Para verificar se o Git foi instalado corretamente, abra o terminal e digite o seguinte comando: `git --version`. Se a versão do Git for exibida, a instalação foi bem-sucedida.



### 1.2 Node.js
Para instalar o Node.js, acesse o site oficial [https://nodejs.org/en/download/](https://nodejs.org/en/download/) e baixe a versão LTS (Long Term Support) para o seu sistema operacional. Em seguida, execute o instalador e siga as instruções na tela para concluir a instalação. Para verificar se o Node.js foi instalado corretamente, abra o terminal e digite o seguinte comando: `node -v`. Se a versão do Node.js for exibida, a instalação foi bem-sucedida.

### 1.3 Newman
Para instalar o Newman, abra o terminal e digite o seguinte comando: `npm install -g newman`. Em seguida instale o reporter html extra para gerar os relatorios com o seguinte comando `npm install -g newman-reporter-htmlextra`. Em seguida, para verificar se o Newman foi instalado corretamente, digite o seguinte comando: `newman --version`. Se a versão do Newman for exibida, a instalação foi bem-sucedida.


## 2. Clone o repositorio
Após a instalar as ferramentas necessarias, clone este repositorio com o seguinte comando: `git clone https://github.com/jose-alves-dev/cinema-api-test.git`.

## 3. Executando a API
Para executar a API, abra o terminal na raiz deste projeto, e digite o seguinte comando: `cd .\nestjs-cinema\`, em seguida instale as dependencias necessarias com `npm install`. Em seguida inicie a API localmente com `npm start`, a API estará disponível em `http://localhost:3000`.

## 4. Executando Newman
### Execução dos testes com Newman e geração do relatório HTML
Para executar os testes unitarios com Newman, abra o terminal na raiz deste projeto, e digite o seguinte comando.

    newman run .\newman\CinemaAPI.postman_collection.json -e .\newman\Local.postman_environment.json
Para gerar o relatório HTML, digite o seguinte comando após a execução dos testes com Newman.

    newman run .\newman\CinemaAPI.postman_collection.json -e .\newman\Local.postman_environment.json -r htmlextra

## 5. Executando Playwright
Para executar os testes de integração com Playwright, abra o terminal na raiz deste projeto, e digite o seguinte comando.

    cd .\playwright\

Execute o seguinte comando para instalar as dependencias necessarias para a execução dos testes com Playwright.

    npm install

Execute o seguinte comando para executar os testes com Playwright no navegador chromium e gerar o relatório HTML. 

    npx playwright test --project=chromium --headed

Como um teste falhou devido à um bug ele irá abrir o html reporter aumaticamente, se não aconteceu isso execute o comando:

    npx playwright show-report


## 6. Executando Cypress
Para executar os testes End to End com Cypress, abra o terminal na raiz deste projeto, e digite o seguinte comando.


    cd .\cypress\

Execute o seguinte comando para instalar as dependencias necessarias para a execução dos testes com Cypress.

    npm install

Execute o seguinte comando para executar os testes com Cypress no navegador eletron e gerar o relatório HTML.

    npx cypress run --spec cypress\e2e\api.spec.cy.js