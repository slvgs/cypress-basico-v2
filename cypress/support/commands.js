Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){

    cy.get('input[name="firstName"]')
        .type('Gabriella')
        .should('have.value', 'Gabriella')
    cy.get('input[name="lastName"]')
        .type('Santana')
        .should('have.value', 'Santana')
    cy.get('#email').type('gabriella@gmail.com')
    cy.get('#phone').type('123455667778')
    const longtext = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. nao aguento mais essa vida desgraçada de estudar porem amo essa área de qualidade sera que um dia vencerei? eis a questão'
    cy.get('textarea')
        .should('be.visible')
        .type(longtext, {delay: 0}) // para rodar como se fosse um ctrl c ctrl v, para que o funcionamento de type para digitar um texto longo seja de 0 segundos. 
        .should('have.value', longtext)
    // cy.get('button').click()// clicar no botão
    cy.contains('button', 'Enviar').click()


})

Cypress.Commands.add('selectOneProductfortext', function(){

    cy.get('#product').select('YouTube').should('have.value', 'youtube')//nesse select buscamos o texto da opção


})


Cypress.Commands.add('selectOneProductforvalue', function(){

    cy.get('#product').select('blog').should('have.value', 'blog') //nesse select buscamos a opção do "value"


})

Cypress.Commands.add('selectOneProductforIndice', function(){

    cy.get('#product').select(3).should('have.value', 'mentoria') //nesse select buscamos a opção do "value"


})
