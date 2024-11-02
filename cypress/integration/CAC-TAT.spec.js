/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
        beforeEach(function(){
                
            cy.visit('./src/index.html')
        })


    it('verifica o título da aplicação', function() {
        
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')



    })

    //exercicio 1

    it.only('preenche os campos obrigatórios e envia o formulário', function(){

        const longtext = 'meudeus nao aguento mais essa vida desgraçada de estudar porem amo essa área de qualidade sera que um dia vencerei? eis a questão'

        cy.get('input[name="firstName"]')
            .type('Gabriella')
            .should('have.value', 'Gabriella')

        cy.get('input[name="lastName"]')
            .type('Santana')
            .should('have.value', 'Santana')

         cy.get('#email').type('gabriella@gmail.com')

        cy.get('textarea')
            .should('be.visible')
            .type(longtext, {delay: 0}) // para rodar como se fosse um ctrl c ctrl v, para que o funcionamento de type para digitar um texto longo seja de 0 segundos. 
            .should('have.value', longtext)

        cy.get('button[type="submit"]').click()



        cy.get('button').click()

        cy.get('.success').should('be.visible')
    })
        
  })



/*describe('Central de atendimento ao cliente TAT', function(){
    it('preenche os campos obrigatórios e envia o formulário', function(){

        cy.get('input[name="firstName"]')
            .type('Gabriella')
            .should('have.value', 'Gabriella')

    })



})*/
