describe('Pruebas básicas en Cypress', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io');
    });

    it('Visita la página principal', () => {
        cy.visit('https://example.cypress.io'); // Visita la URL base definida en la configuración
      });
    

    it('Verifica el título de la página', () => {
        cy.title().should('include', 'Cypress');
    });

    it('Navega a otra sección', () => {
        cy.contains('type').click();
        cy.url().should('include', '/commands/actions');
    });

      
});
