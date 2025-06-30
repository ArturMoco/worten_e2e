describe('Teste E2E - Adicionar iPhone 16 ao carrinho', () => {
  it('Deve acessar a home, buscar iPhone 16, adicionar ao carrinho e verificar se o produto está no carrinho.', () => {
    // 1. Acessar a página inicial da Worten
    cy.visit('https://www.worten.pt');

    // 2. Aguardar o carregamento da barra de busca com segurança
    cy.waitUntil(() =>
      cy.get('input[type="search"]').then(($el) => Cypress.dom.isVisible($el))
    );

    // 3. Esperar antes de digitar para garantir que o campo esteja pronto
    cy.wait(5000);

    // 4. Digitar "iPhone 16" letra por letra com delay controlado
    const textoBusca = 'iPhone 16';
    textoBusca.split('').forEach((letra) => {
      cy.get('input[type="search"]').type(letra, { delay: 500 });
    });

    // 5. Pressionar ENTER para iniciar a busca
    cy.get('input[type="search"]').type('{enter}');
    cy.wait(3000); // espera o carregamento da página de resultados

    // 6. Esperar o carregamento dos produtos visíveis
    cy.waitUntil(() =>
      cy.get('.product-card__text-container').should('be.visible')
    );
    cy.wait(500);
    cy.screenshot('1-Resultados-Visiveis');

    // 7. Rolar até o produto alvo dinamicamente
    cy.get(':nth-child(2) > .product-card--grid-container')
      .scrollIntoView({ duration: 1000 })
      .should('be.visible');

    // 8. Clicar no card correto do produto
    cy.get(':nth-child(2) > .product-card--grid-container > .product-card > .product-card__content > .product-card__text-container', { timeout: 10000 })
      .should('be.visible')
      .click();

    // 9. Clicar no botão "Adicionar ao carrinho"
    cy.wait(3000);

    // ⛔ Impede qualquer scroll antes do print
    cy.window().then((win) => {
      win.document.body.style.overflow = 'hidden';
      win.document.body.style.position = 'fixed';
      win.document.body.style.top = '0';
    });

    cy.wait(500);
    cy.screenshot('2-Produto');

    cy.get('[data-badge-id="01GAR9EV7QX6BBZ1WJHB8TKJPT"]')
      .should('exist')
      .should('be.visible')
      .click();

    // 10. Clicar no botão real "Continuar sem serviços"
    cy.wait(1000);
    cy.screenshot('3-Continuar-Sem-Servicos');

    cy.get('.button-primary > span').click();

    cy.wait(1000);
    cy.screenshot('4-Produto-Adicionado');

    // 11. Verificar se o produto está no carrinho
    cy.contains('iPhone 16 Pro Max', { scrollBehavior: false }).should('exist');

    cy.wait(1000);
    cy.screenshot('5-Produto-No-Carrinho');
  });
});
