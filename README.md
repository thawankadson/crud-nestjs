🏥 CRUD de Estoque para Farmácia — NestJS + Swagger + JWT
Este projeto é uma API REST desenvolvida com NestJS, que simula o gerenciamento de estoque de uma farmácia. A aplicação permite:

✅ Gerenciar produtos (CRUD)

✅ Controlar histórico de movimentações (entrada/saída de estoque)

✅ Autenticação e autorização via JWT

✅ Documentação interativa com Swagger

✅ Preparada para conexão com banco de dados (PostgreSQL)

🚀 Tecnologias Utilizadas
NestJS — Framework Node.js

TypeScript

JWT — Autenticação

Bcrypt — Criptografia de senhas

Swagger — Documentação da API

PostgreSQL (pronto para integração)

Node.js

📦 Instalação
Clone o projeto:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
Instale as dependências:

bash
Copiar
Editar
npm install
Execute a aplicação em modo desenvolvimento:

bash
Copiar
Editar
npm run start:dev
📜 Documentação Swagger
Acesse a documentação interativa em:

bash
Copiar
Editar
http://localhost:3000/api
🔐 Autenticação
🔸 Registro:
POST /auth/register

json
Copiar
Editar
{
  "username": "admin",
  "email": "admin@email.com",
  "password": "123456"
}
🔸 Login:
POST /auth/login

json
Copiar
Editar
{
  "identifier": "admin",
  "password": "123456"
}
✔️ Resposta:

json
Copiar
Editar
{
  "access_token": "token.jwt.aqui"
}
👉 Use esse token no Swagger ou nas requisições no Header:

makefile
Copiar
Editar
Authorization: Bearer token.jwt.aqui
📦 Rotas da API
🔸 Produtos — /products
Método	Rota	Descrição
POST	/products	Criar produto
GET	/products	Listar todos
GET	/products/:id	Buscar por ID
PATCH	/products/:id	Atualizar produto
DELETE	/products/:id	Deletar produto

🔸 Histórico de Movimentações — /movement-history
Método	Rota	Descrição
GET	/movement-history	Listar todo o histórico
GET	/movement-history/:id	Buscar histórico de um produto

🏗️ Estrutura do Projeto
bash
Copiar
Editar
src/
├── auth/                # Módulo de autenticação
├── products/             # Módulo de produtos
├── movement-history/     # Módulo de histórico de estoque
├── users/                # Módulo de usuários
├── app.module.ts         # Módulo principal
└── main.ts               # Arquivo de bootstrap
🗄️ Banco de Dados (Futuro)
O projeto está preparado para migrar do armazenamento em memória para banco de dados PostgreSQL, usando TypeORM ou Prisma.

