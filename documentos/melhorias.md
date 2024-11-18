# Melhorias
![alt text](../assets/banners/melhorias.png)
## Melhorias Feitas
### ``ticket.service.ts``
Ao executar a API, fazendo chamada para o endpoint ``/tickets``, em qualquer rota que exigia o ID, constava-se uma falha no sistema, onde a requisição não retornava a resposta adequada e crashava, ao analisar o codigo foram encontrados defeitos no arquivo ``tickets.service.ts ``, nos metodos ``findOne()``, ``update()`` e ``remove()``, onde ao comparar com os metodos do arquivo ``movies.service.ts``, foi possivel identificar que os metodos de tickets não fazem uma chamada adequada do ID e também o uso incorreto das condicionais dentro dos metodos.
<p style="display: flex; justify-content: space-evenly;">
<img src="../assets/melhorias/serviceErrado.png" alt="controllerErrado" width="300" >
<img src="../assets/melhorias/serviceCerto.png" alt="controllerCorrigido" width="300" >
</p>

### ``ticket.controller.ts``
Após a correção no arquivo ``ticket.service.ts``, foi possivel fazer chamadas com os ``ID's`` corretos, porém ao fazer requisição à um ``ID`` que não existia o sistema falhava, não retornando a resposta adequada e crashando A API. 

Ao analisar o arquivo ``ticket.controller.ts``, foi possivel identificar que os metodo ``remove()``, ``update()`` e ``findOne()`` não possuem tratamento de erro, o que pode causar falhas no sistema. Para corrigir isso, é necessário adicionar um tratamento de erro para lidar com situações em que o ``ID`` não é encontrado ou ocorre algum outro erro durante a execução da operação.
<p style="display: flex; justify-content: space-evenly;">
<img src="../assets/melhorias/controllerErrado.png" alt="controllerErrado" width="300" >
<img src="../assets/melhorias/controllerCerto.png" alt="controllerCorrigido" width="300" >
</p>



## Melhorias Sugeridas
### Endpoint /Usuarios
Para criação de usuarios, que contenha o tipo de usuario(administrador ou não) para autenticação.
### Endpoints /Login
Para autenticação de usuarios, que retorna um token de acesso para o usuario, que pode ser utilizado para acessar rotas protegidas da API.
![alt text](../assets/mapa-mental-att.png)
### Endpoints /Movies e /Tickets
Campo de datas não ser do tipo string, pois além de aceitar textos, aceita datas futuras e muito antigas, o que causa inconsistência no banco de dados e dificulta uma futura implementação de buscar por datas. 