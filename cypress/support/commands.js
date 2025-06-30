Cypress.Commands.add('acessarHomepage', () => {
  cy.visit('https://www.worten.pt');
  cy.waitUntil(() =>
    cy.get('input[type="search"]').then(($el) => Cypress.dom.isVisible($el))
  );
  cy.wait(5000);
});

Cypress.Commands.add('buscarProduto', (nomeProduto) => {
  nomeProduto.split('').forEach((letra) => {
    cy.get('input[type="search"]').type(letra, { delay: 500 });
  });

  cy.get('input[type="search"]').type('{enter}');
  cy.wait(3000);

  cy.waitUntil(() =>
    cy.get('.product-card__text-container').should('be.visible')
  );
  cy.wait(500);
  cy.screenshot('1-Resultados-Visiveis');

  cy.get(':nth-child(2) > .product-card--grid-container')
    .scrollIntoView({ duration: 1000 })
    .should('be.visible');

  cy.get(':nth-child(2) > .product-card--grid-container > .product-card > .product-card__content > .product-card__text-container', { timeout: 10000 })
    .should('be.visible')
    .click();
});

Cypress.Commands.add('adicionarAoCarrinho', () => {
  cy.wait(3000);
  cy.get('[data-badge-id="01GAR9EV7QX6BBZ1WJHB8TKJPT"]', { timeout: 10000 })
    .should('exist')
    .should('be.visible');

  cy.window().then((win) => {
    win.document.body.style.overflow = 'hidden';
    win.document.body.style.position = 'fixed';
    win.document.body.style.top = '0';
  });

  cy.wait(500);
  cy.screenshot('2-Produto');

  cy.get('[data-badge-id="01GAR9EV7QX6BBZ1WJHB8TKJPT"]').click();

  cy.wait(1000);
  cy.screenshot('3-Continuar-Sem-Servicos');

  cy.get('.button-primary > span').click();

  cy.wait(1000);
  cy.screenshot('4-Produto-Adicionado');
});

Cypress.Commands.add('verificarCarrinho', (produtoEsperado) => {
  cy.contains(produtoEsperado, { scrollBehavior: false }).should('exist');
  cy.wait(1000);
  cy.screenshot('5-Produto-No-Carrinho');
});
