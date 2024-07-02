describe('Renderizado del título del odontograma inicial', () => {
  it('debería mostrar el título correctamente', () => {

    cy.visit('https://proyecto-fin-de-curso-taller-de-proyectos-2-nu.vercel.app/odontograma/63652581');

    cy.get('h1').should('contain', 'Odontograma Inicial');
  });
});
