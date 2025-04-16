# Análise de Sentimentos para Monitoramento da Opinião Pública em Redes Sociais sobre Serviços Públicos

## 📌 Descrição
Este projeto tem como objetivo coletar, processar e analisar postagens de redes sociais (Twitter e Facebook) para monitorar a opinião pública sobre serviços públicos no Brasil. Através de técnicas de scraping e análise de dados, é possível identificar sentimentos e padrões relevantes nas postagens.

A solução conta com:
- Scraper customizado para extração de dados.
- Pré-processamento e enriquecimento dos dados (ex: categorização).
- Armazenamento em banco de dados MongoDB.
- Backend em Java Spring Boot.
- Frontend moderno e responsivo com Angular + PrimeNG v19.

---

## 🧱 Estrutura do Projeto

```
TCC-Analise/
│
├── backend/           # Aplicação Spring Boot (REST API)
├── frontend/          # Aplicação Angular (dashboard e gráficos)
├── data/              # Dados de entrada e saída
│   ├── raw/           # Arquivos CSV originais
│   ├── processed/     # Dados tratados em JSON
│   └── scripts/       # Scripts de processamento (Python)
├── docs/              # Documentação do projeto
└── README.md
```

---

## ✅ Requisitos

- Java 11 ou superior
- Maven
- Node.js (v18+ recomendado)
- Angular CLI
- MongoDB (local ou Atlas)
- MongoDB Database Tools (para importação de dados)

---

## ⚙️ Passo a Passo para Rodar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/seuusuario/TCC-Analise.git
cd TCC-Analise
```

---

### 2. Instale dependências do Frontend (Angular)
```bash
cd frontend
npm install
```

---

### 3. Instale o Angular CLI (caso não tenha)
```bash
npm install -g @angular/cli
```

---

### 4. Rode o Frontend
```bash
ng serve
```
Acesse: http://localhost:4200

---

### 5. Importe os dados para o MongoDB

Baixe e configure os Database Tools:  
[https://www.mongodb.com/try/download/database-tools](https://www.mongodb.com/try/download/database-tools)

Adicione a pasta `bin` no seu PATH do sistema.

Exemplo de comando de importação:
```bash
mongoimport --uri="mongodb+srv://usuario:senha@cluster.mongodb.net/TCC-Analise" --collection twitter --file "data/processed/brasilia_educacao.json" --jsonArray
```

---

### 6. Rode o Backend (Spring Boot)
```bash
cd backend
mvn spring-boot:run
```
API disponível em: http://localhost:8080/api/tweets

---

## 🧪 Exemplos de Comandos Úteis

### Criar novo componente Angular:
```bash
ng generate component components/novo-componente
```

### Criar novo serviço Angular:
```bash
ng generate service services/novo-servico
```

---

## 👨‍💻 Autores

Este projeto foi desenvolvido por:

- João Victor Mothé Vantil 
- Giulia Campelo Bezerra

---

## 📄 Licença
Este projeto é apenas para fins acadêmicos e não possui fins comerciais.

