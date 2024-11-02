/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
        beforeEach(function(){
                
            cy.visit('./src/index.html')
        })


    it('verifica o título da aplicação', function() {
        
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')



    })

    //exercicio 1

    it('preenche os campos obrigatórios e envia o formulário', function(){

        cy.get('input[name="firstName"]')
            .type('Gabriella')
            .should('have.value', 'Gabriella')

        cy.get('input[name="lastName"]')
            .type('Santana')
            .should('have.value', 'Santana')

        cy.get('#email').type('gabriella@gmail.com')

        const longtext = 'meudeus nao aguento mais essa vida desgraçada de estudar porem amo essa área de qualidade sera que um dia vencerei? eis a questão'
        cy.get('textarea')
            .should('be.visible')
            .type(longtext, {delay: 0}) // para rodar como se fosse um ctrl c ctrl v, para que o funcionamento de type para digitar um texto longo seja de 0 segundos. 
            .should('have.value', longtext)

        cy.get('button[type="submit"]').click()//clicar no botão porém no componente "type"
        cy.get('button').click()// clicar no botão
        cy.get('.success').should('be.visible')//verificar se o seletor .success está visivel 
    })

    it.only('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){

        cy.get('input[name="firstName"]')
            .type('Gabriella')
            .should('have.value', 'Gabriella')

        cy.get('input[name="lastName"]')
            .type('Santana')
            .should('have.value', 'Santana')

        cy.get('#email').type('gabriella@gmail,com')
        cy.get('button').click()// clicar no botão

        cy.get('.error').should('be.visible')



    })


        
  })



/*describe('Central de atendimento ao cliente TAT', function(){
    it('preenche os campos obrigatórios e envia o formulário', function(){

        cy.get('input[name="firstName"]')
            .type('Gabriella')
            .should('have.value', 'Gabriella')

    })



})*/
