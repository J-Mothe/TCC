# Análise de Sentimentos para Monitoramento da Opinião Pública em Redes Sociais sobre Serviços Públicos

## 📌 Descrição
Este projeto tem como objetivo coletar, processar e analisar postagens de redes sociais (Twitter) para monitorar a opinião pública sobre serviços públicos no Brasil. Através de técnicas de scraping e análise de dados, é possível identificar sentimentos e padrões relevantes nas postagens.

A solução conta com:
- Scraper customizado para extração de dados.
- Pré-processamento e enriquecimento dos dados (ex: categorização e análise de sentimento).
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

- JDK 17 (Java Development Kit)
- Maven
- Node.js (v18+ recomendado)
- Angular CLI
- MongoDB (local ou Atlas)
- MongoDB Database Tools (para importação de dados)

---

## 🧠 Processamento com Python

O script localizado em `data/scripts` é responsável por:
1. **Leitura do CSV** contendo tweet ID, conteúdo, curtidas, retweets e data.
2. **Limpeza do texto**:
   - Remove links, hashtags e menções.
   - Ignora textos muito curtos (menos de 4 palavras úteis).
3. **Análise de Sentimento**:
   - Usa o modelo `lipaoMai/BERT-sentiment-analysis-portuguese` da Hugging Face.
   - Classifica o sentimento como `positivo`, `negativo` ou `neutro`.
4. **Conversão numérica**:
   - Trata valores como “1.5K”, “1500.0”, etc. e exporta como `$numberInt` ou `$numberDouble`.
5. **Exportação final**:
   - Gera um JSON estruturado para importação no MongoDB.

Exemplo de saída:
```json
{
  "tweet_id": { "$numberLong": "1909721455" },
  "timestamp": { "$date": { "$numberLong": "1744148050000" } },
  "content": "Texto do tweet...",
  "likes": { "$numberInt": "100" },
  "retweets": { "$numberInt": "20" },
  "analytics": { "$numberDouble": "1500.0" },
  "categoria": "educação",
  "sentimento": "positivo"
}
```

---

## ⚙️ Como Rodar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/J-Mothe/TCC.git
cd TCC
```

### 2. Instale dependências do Frontend
```bash
cd frontend
npm install
```

### 3. Instale o Angular CLI (caso necessário)
```bash
npm install -g @angular/cli
```

### 4. Rode o Frontend
```bash
ng serve
```
> Acesse: http://localhost:4200

---

### 5. Importe os Dados para o MongoDB

1. Instale os Database Tools:  
   [https://www.mongodb.com/try/download/database-tools](https://www.mongodb.com/try/download/database-tools)

2. Adicione a pasta `bin` no `PATH`.

3. Importe os dados:
```bash
mongoimport --uri="mongodb+srv://usuario:senha@cluster.mongodb.net/TCC-Analise" --collection twitter --file "data/processed/brasilia_educacao_com_sentimento.json" --jsonArray
```

---

### 6. Configure o Ambiente Java

#### Instale o JDK 17:
[https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)

```bash
setx JAVA_HOME "C:\Program Files\Java\jdk-17"
setx PATH "%PATH%;%JAVA_HOME%\bin"
```

#### Instale o Maven:
[https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi)

```bash
setx MAVEN_HOME "C:\Program Files\Apache\maven"
setx PATH "%PATH%;%MAVEN_HOME%\bin"
```

---

### 7. Rode o Backend (Spring Boot)
```bash
cd backend
mvn spring-boot:run
```
> API disponível em: http://localhost:8080/api/tweets

---

## 🧪 Comandos Úteis

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
