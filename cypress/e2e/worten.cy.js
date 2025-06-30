describe('Teste E2E - Adicionar iPhone 16 ao carrinho', () => {
  it('Deve acessar a homepage, buscar iPhone 16, adicionar ao carrinho e verificar o carrinho', () => {
    cy.acessarHomepage();
    cy.buscarProduto('iPhone 16');
    cy.adicionarAoCarrinho();
    cy.verificarCarrinho('iPhone 16 Pro Max');
  });
});
