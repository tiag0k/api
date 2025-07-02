
├── frontend/         # Interface visual em HTML + Tailwind
├── k6/               # Testes de carga com Grafana K6
├── playwright/       # Testes funcionais com Playwright
├── grafana/          # Dashboard (opcional)
└── README.md


- `GET /livros` → Listar livros
- `POST /livros` → Adicionar livro
- `PUT /livros/:id` → Atualizar livro
- `DELETE /livros/:id` → Excluir livro

npx serve frontend/

python3 -m http.server

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
