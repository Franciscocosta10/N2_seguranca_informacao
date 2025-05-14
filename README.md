# N2 Segurança da Informação

Este projeto é uma API desenvolvida com Node.js e Express que simula uma aplicação insegura, permitindo a execução de ataques como SQL Injection, XSS e CSRF


## 🧩 Tecnologias utilizadas

- Node.js
- Express
- Sequelize (ORM)
- MySQL
- CORS

## 📁 Instalação do Projeto

### Pré-requisitos

- Node.js instalado
- MySQL instalado e rodando

### 🔧 Passos para rodar localmente

1. **Clone o repositório:**

`git clone https://github.com/seu-usuario/https://github.com/Franciscocosta10/N2_seguranca_informacao`

2. **Instale as dependências:**

`npm install`

3. **Configure o banco de dados:**

Crie um banco de dados MySQL chamado N2_seguranca e configure o arquivo /models/index.js com os dados de acesso:

```
const sequelize = new Sequelize('N2_seguranca', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql'
});
```

4. **Rode o projeto:**

npm start

## 📌 Exemplo de Requisição da API

### 🔹 [POST] Criar usuário

Cria um novo usuário no sistema.

**Request:**

```
POST /users
Host: localhost:3000
Content-Type: application/json
Body (JSON):

{
  "nome": "joao",
  "email": "joao@email.com",
  "senha": "123456"
}
```
