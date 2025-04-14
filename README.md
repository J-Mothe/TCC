# Análise de Sentimentos para Monitoramento da Opinião Pública em Redes Sociais sobre Serviços Públicos

## Descrição
Projeto para coletar, processar e analisar postagens de redes sociais (Twitter e Facebook) com o objetivo de monitorar a opinião pública sobre serviços públicos. O projeto utiliza um scraper customizado para extrair dados, que são processados e armazenados em um banco de dados MongoDB. O back-end é desenvolvido em Spring Boot e o front-end em Angular.

## Estrutura do Projeto
- **backend/**: Projeto Spring Boot com endpoints REST para interação com o MongoDB.
- **frontend/**: Aplicação Angular para visualização dos dados (dashboards, gráficos, etc.).
- **data/**: Arquivos CSV brutos, dados processados e scripts de pré-processamento.
  - **raw/**: Arquivos CSV originais.
  - **processed/**: Arquivos JSON com os dados processados.
  - **scripts/**: Scripts (ex.: process_csv.py) para o tratamento dos dados.
- **docs/**: Documentação do projeto.

## Requisitos
- Java 11 ou superior
- Maven
- Node.js e Angular CLI
- MongoDB

## Instruções de Execução

### Clone
Para fazer o clone deste projeto, copie a URL abaixo:
```bash
git clone <URL_DO_REPOSITORIO>
```
## Baixar as bibliotecas 

Navegue até a pasta do projeto Angular:
```bash
    cd frontend
```

Abra o terminal dentro da pasta do projeto e execute:
```bash
    npm install
```

## Instalações Globais

Ainda no terminal do Visual Studio Code, execute o seguinte comando (se ainda não estiver instalado):
```bash
   npm install -g @angular/cli
```
## Executar o projeto

Para iniciar a aplicação Angular:
```bash
    cd frontend
    ng serve
```
A aplicação ficará disponível em http://localhost:4200.

Para criar componentes e serviços no Angular:

Para criar um componente:
```bash
ng generate component components/dashboard
```

Para criar um serviço:
```bash
ng generate service services/api
```
Lembre-se de estar dentro da pasta app ou colocar o caminho para dentro do app

## Importando para o banco

Use o comando: mongoimport

Lembre-se de mudar o usuario, senha, estar conectado com cluster e mudar o nome do arquivo.
Comando exemplo (usei o shell do windows):
```bash
& "C:\MongoDB\Database Tools\bin\mongoimport.exe" --ssl --uri="mongodb+srv://joaomothe:senha@tcc-analise.uqhcvjn.mongodb.net/TCC-Analise?retryWrites=true&w=majority&appName=TCC-Analise" --collection twitter --file "C:\Faculdade\TCC-Analise\TCC\data\processed\brasilia_educação.json" --jsonArray
```
