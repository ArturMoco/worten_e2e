// suporte pode ficar vazio ou ser configurado depois
import 'cypress-wait-until';

Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignora erros de scripts de terceiros que não afetam os testes
  return false;
});

import './commands';
