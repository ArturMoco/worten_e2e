# 🧪 Plano de Testes - Worten.pt (Formato Gherkin)

Este plano de testes define os **cenários de validação funcional E2E** para o fluxo de compra do produto "iPhone 16" no site Worten.pt, utilizando a linguagem Gherkin (Behavior Driven Development - BDD).

---

## 🔎 Funcionalidade: Compra de produto

Como um cliente da Worten,  
Quero buscar, selecionar e comprar um produto,  
Para garantir que o site permite concluir a compra com sucesso.

---

### 🎯 Cenário 1: Acessar a homepage da Worten

```gherkin
Feature: Acessar a página inicial

  Scenario: Acesso com sucesso à homepage
    Given que o usuário acessa o site "https://www.worten.pt"
    Then o campo de busca deve estar visível
```

---

### 🔍 Cenário 2: Buscar por iPhone 16

```gherkin
Feature: Busca de produto

  Scenario: Buscar um iPhone 16
    Given que o usuário está na homepage da Worten
    When ele digita "iPhone 16" no campo de busca
    And pressiona a tecla ENTER
    Then a página de resultados deve exibir produtos relacionados
    And o produto "iPhone 16" deve estar visível na lista
```

---

### 🛒 Cenário 3: Adicionar o produto ao carrinho

```gherkin
Feature: Adição ao carrinho

  Scenario: Adicionar produto diretamente da página de detalhes
    Given que o produto "iPhone 16" está visível nos resultados
    When o usuário clica no card do produto
    And a página do produto é carregada
    And ele clica no botão "Adicionar ao carrinho"
    Then o popup de "Continuar sem serviços" é exibido
    And o usuário clica em "Continuar sem serviços"
```

---

### 📦 Cenário 4: Verificar se o produto está no carrinho

```gherkin
Feature: Validação do carrinho

  Scenario: Confirmar o produto no carrinho
    Given que o produto foi adicionado com sucesso
    When o usuário acessa o carrinho de compras
    Then o produto "iPhone 16 Pro Max" deve estar presente na lista
```

---

## ✅ Notas

- Este plano cobre um **fluxo crítico de compra no e-commerce**
- Todos os testes foram automatizados com **Cypress v14**
- O script inclui **scroll, delays e interações realistas**

