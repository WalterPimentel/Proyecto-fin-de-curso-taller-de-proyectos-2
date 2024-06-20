describe('Verificación de acceso a los datos del odontograma', () => {
  it('Visita la página principal y verifica la respuesta', () => {
    cy.request('https://backend-nine-amber-97.vercel.app/').then((response) => {
      expect(response.body).to.have.property('ok', true);
      expect(response.body).to.have.property('msg', 'Respondío del backend');
    });
  });

  it('Navega a la ruta de pacientes y verifica la respuesta y los odontogramas', () => {
    cy.request('https://backend-nine-amber-97.vercel.app/pacientes').then((response) => {
      expect(response.status).to.eq(200);      
      response.body.forEach((paciente) => {
        expect(paciente.odontogramas).to.be.an('array').that.is.not.empty;
        paciente.odontogramas.forEach((odontograma) => {          
          expect(odontograma).to.include.keys('edadCategoria', 'especificaciones', 'fecha', 'observaciones', 'odontograma', '_id');          
          expect(odontograma.odontograma).to.be.an('object').that.is.not.empty;          
        });
      });
    });
  });
});
94247417