# 🛒 Teste E2E - Worten.pt

Este projeto automatiza o fluxo de compra no site [worten.pt](https://www.worten.pt) usando Cypress 14, simulando o comportamento real de um usuário.

---

## ✅ Funcionalidade coberta

1. Acessar a homepage da Worten
2. Buscar o produto **iPhone 16**
3. Adicionar o produto ao carrinho
4. Verificar se o produto está no carrinho

---

## 🧪 Tecnologias e Ferramentas

- [Cypress v14](https://www.cypress.io/)
- Cypress Wait Until Plugin
- Cypress Screenshot e Video Capture
- JavaScript

---

## 🗂️ Estrutura do Projeto

```
worten-e2e-cypress/
├── cypress/
│   ├── e2e/
│   │   └── worten.cy.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
├── README.md
├── PLANO_DE_TESTES.md
├── CHECKLIST_DE_PRINTS.md
└── DOCUMENTACAO_TECNICA.md
```

---

## 🚀 Como executar

### 1. Instale as dependências
```bash
npm install
```

### 2. Rodar em modo interativo (com navegador)
```bash
npx cypress open
```

### 3. Rodar em modo headless com vídeo
```bash
npx cypress run
```

---

## 📷 Capturas & Vídeo

O teste gera automaticamente:

- Prints organizados por etapa (ex: `1-Resultados-Visiveis`, `5-Produto-No-Carrinho`)
- Vídeo completo do fluxo via `cypress/videos/`

---

## 🧠 Autor

Artur Felipe Albuquerque Portela  
[LinkedIn](https://www.linkedin.com/in/arturfelipeqa/) · QA Tester | Testes Automatizados & Manuais

---

## 🧾 Licença

MIT License
