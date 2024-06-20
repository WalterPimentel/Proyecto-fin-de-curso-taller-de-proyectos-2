it('pdf_email', function() {
  cy.visit('http://localhost:4200/');
  cy.get('.bg-blue-500').click();
  cy.get('#correo').clear('p');
  cy.get('#correo').type('prueba@gmail.com');
  cy.get('#nombres').clear('p');
  cy.get('#nombres').type('prueba');
  cy.get('#dni').clear('9');
  cy.get('#dni').type('94247417');
  cy.get('.bg-white > .flex > .bg-blue-500').click();
});
