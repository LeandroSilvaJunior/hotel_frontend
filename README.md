# Hotel

### Objetivo

Desenvolver uma aplicação (Somente o frontend) que possibilite realizar o cadastro de hóspedes e o check in.

### Requisitos funcionais
* Um CRUDL para o cadastro de hóspedes;
* No check in deve ser possível buscar hóspedes cadastrados pelo nome, documento ou telefone;
* Consultar hóspedes que já realizaram o check in e não estão mais no hotel;
* Consultar hóspedes que ainda estão no hotel;
* As consultas devem apresentar o valor (valor total e o valor da última hospedagem) já gasto pelo hóspede no hotel;

### Régras de negócio
* Uma diária no hotel de segunda à sexta custa R$120,00;
* Uma diária no hotel em finais de semana custa R$150,00;
* Caso a pessoa precise de uma vaga na garagem do hotel há um acréscimo diário, sendo R$15,00 de segunda à sexta e R$20,00 nos finais de semana;
* Caso o horário da saída seja após às 16:30h deve ser cobrada uma diária extra;

## Execução

### Dependências necessárias
* NodeJS 12.8
* npm

### Passo a passo

Instalar globalmente o ng-cli, caso ja tenha ele instaldo esta etapa pode ser ignorada
```
npm install -g @angular/cli
```
Instalar globalmente o json-server que sera utilizado para simular o back-end da aplicação, caso ja tenha ele instaldo esta etapa pode ser ignorada
```
npm install -g json-server
```
Navegar até o diretório raiz da aplicação e instalar as dependências da aplicação
```
npm install
```
No mermo diretório, iniciar o json-server
```
json-server --watch db.json
```
Executar o comando abaixo para inicialização da aplicação
```
npm start
```
A aplicação então podera ser acessada através da url `http://localhost:4200`

### Utilização
Os hospedes e estadias cadastrados pordem ser visualizados no arquivo db.json no diretório raiz da aplicação, ou, se preferir, através dos links http://localhost:3000/estadias e http://localhost:3000/hospedes

## Falta fazer
* Corrigir erro de timezone na persistencia do check-in
* Implementar filtragem na busca de hospedes
* Implementar paginação na busca de hospedes
* Implementar visualização do valor total gasto por hospede


