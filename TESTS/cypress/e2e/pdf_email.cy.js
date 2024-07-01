it('pdf_email', function() {  
  cy.visit('http://localhost:4200/odontograma/71946575');
  cy.get('.bg-blue-500').click();
  cy.get('#correo').clear();
  cy.get('#correo').type('prueba@dominio.com');
  cy.get('#nombres').clear('P');
  cy.get('#nombres').type('Prueba');
  cy.get('#dni').clear('9');
  cy.get('#dni').type('94247417');
  cy.get('.bg-white > .flex > .bg-blue-500').click();  
});
