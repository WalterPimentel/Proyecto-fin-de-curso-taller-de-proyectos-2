it('spec2', function () {
    cy.visit('http://localhost:4200/odontograma');
    cy.get('#pacienteCategoria')
        .select('completo');

    cy.get('[data-index="45"] > .center')
        .click();
    cy.get('.body > :nth-child(3)')
        .click();
    cy.get('.inset-0')
        .click();
    cy.get('[data-index="46"] > .bottom')
        .click();
    cy.get('.body > :nth-child(3)')
        .click();
    cy.get(':nth-child(3) > .ml-2')
        .click();
    cy.get('.inset-0')
        .click();
    cy.get(':nth-child(3) > :nth-child(2) > .tooth-with-margin-right > .right')
        .click();
    cy.get(':nth-child(2) > .ml-2')
        .click();
    cy.get(':nth-child(2) > .ml-2')
        .click();
    cy.get('.header > .fas')
        .click();

    cy.get('#especificaciones')
        .type('Especificaciones de prueba para el paciente', { force: true });
    cy.get('#observaciones')
        .type('Observaciones de prueba para el paciente', { force: true });

    cy.contains('button', ' Guardar Odontograma ')
        .click({ force: true });
    cy.contains('button', ' Aceptar ')
        .click({ force: true });
});
