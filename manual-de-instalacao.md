
## Newman
### 1. Instalação
Instale o Newman com o seguinte comando `npm install -g newman`, em seguida instale o reporter html extra para gerar os relatorios com o seguinte comando `npm install -g newman-reporter-htmlextra`.

### 2. Execução dos testes com Newman e geração do relatório HTML
Para executar os testes com Newman, abra o terminal na raiz deste projeto, e digite o seguinte comando.

    newman run .\newman\CinemaAPI.postman_collection.json -e .\newman\Local.postman_environment.json
Para gerar o relatório HTML, digite o seguinte comando após a execução dos testes com Newman.

    newman run .\newman\CinemaAPI.postman_collection.json -e .\newman\Local.postman_environment.json -r htmlextra
