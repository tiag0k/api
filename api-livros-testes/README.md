# 📚 API de Livros – Testes de Carga e Funcionais

Este repositório demonstra como aplicar **testes de carga com Grafana K6** e **testes funcionais com Playwright** nas 4 operações básicas de uma API (CRUD).

---

## 🚀 Estrutura do Projeto

```
.
├── frontend/         # Interface visual em HTML + Tailwind
├── k6/               # Testes de carga com Grafana K6
├── playwright/       # Testes funcionais com Playwright
├── grafana/          # Dashboard (opcional)
└── README.md
```

---

## 🧪 Funcionalidades testadas

- `GET /livros` → Listar livros
- `POST /livros` → Adicionar livro
- `PUT /livros/:id` → Atualizar livro
- `DELETE /livros/:id` → Excluir livro

---

## 📈 Testes de Carga com K6

### Pré-requisitos

- [Instalar K6](https://k6.io/docs/getting-started/installation/)
- API em execução (pode ser mock, JSON-server ou backend real)

### Rodar o teste

```bash
cd k6
k6 run testes.js
```

### Opcional: Visualização com InfluxDB + Grafana

Você pode configurar um dashboard de performance usando:
- InfluxDB como armazenamento
- Grafana como visualização

```bash
k6 run --out influxdb=http://localhost:8086/k6 testes.js
```

---

## ✅ Testes Funcionais com Playwright

### Pré-requisitos

- Node.js instalado
- Frontend executando (ex: `npx serve frontend/`)

### Instalação e execução

```bash
cd playwright
npm init -y
npm i -D playwright
npx playwright install
npx playwright test livros.spec.ts
```

---

## 💻 Frontend

- Localizado em `frontend/index.html`
- Projeto simples com formulário de cadastro de livros
- Pode ser executado com qualquer servidor local, ex:

```bash
npx serve frontend/
# ou
python3 -m http.server
```

---

## 🧰 Sugestão de Scripts com `package.json`

Você pode colocar isso no `package.json` raiz:

```json
{
  "name": "api-livros-testes",
  "scripts": {
    "k6": "k6 run k6/testes.js",
    "test:ui": "playwright test playwright/livros.spec.ts",
    "serve": "npx serve frontend/"
  },
  "devDependencies": {
    "playwright": "^1.45.0"
  }
}
```

---

## 📝 Contribuições

Sinta-se à vontade para clonar, adaptar, ou contribuir com melhorias!

---

## 🧑‍💻 Autor

Feito por [Seu Nome] – inspirando testes reais para APIs simples e acessíveis.
