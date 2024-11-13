it('visita outra página para realizar testes', function(){

    cy.visit('./src/privacy.html')

    cy.contains('Talking About Testing').should('be.visible')



})