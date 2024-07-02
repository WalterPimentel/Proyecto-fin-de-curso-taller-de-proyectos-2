it('guardando_datos', function () {
    cy.visit('https://proyecto-fin-de-curso-taller-de-proyectos-2-nu.vercel.app/pacientes');
    cy.get('#mat-expansion-panel-header-1 > .mat-content > .justify-center').click();
    cy.get('#mat-expansion-panel-header-1 > .mat-content > .justify-end > .mdc-button > .mdc-button__label').click();
    cy.get('.mat-content > :nth-child(2)').click();
    cy.get('.mat-content > :nth-child(2)').click();
    cy.get('[data-index="14"] > .center').click();
    cy.get('.body > :nth-child(3)').click();
    cy.get('.body > :nth-child(2)').click();
    cy.get('.header > .fas').click();
    cy.get(':nth-child(2) > .tooth-with-margin-left > .left').click();
    cy.get('.body > :nth-child(2)').click();
    cy.get(':nth-child(2) > .ml-2').click();
    cy.get('.inset-0').click();
    cy.get('#especificaciones')
        .type('Especificaciones de prueba para el paciente');
    cy.get('#observaciones')
        .type('Observaciones de prueba para el paciente');
    cy.contains('button', ' Guardar Odontograma ').click({ force: true });
    cy.contains('button', ' Aceptar ').click({ force: true });
});
