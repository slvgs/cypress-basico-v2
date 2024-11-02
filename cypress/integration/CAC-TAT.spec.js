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


    //exercicio 2

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){

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

    //exercicio 3


    it('campo telefone continua vazio quando preenchido com valor não numérico', function(){


        cy.get('#phone')
            .type('ahhskoeksl')
            .should('have.value', '') 



    })

     //exercicio 4
    
    it('campo telefone continua vazio quando preenchido com valor não numérico', function(){


        cy.get('input[name="firstName"]')
            .type('Gabriella')
            .should('have.value', 'Gabriella')

        cy.get('input[name="lastName"]')
            .type('Santana')
            .should('have.value', 'Santana')

        cy.get('#email').type('gabriella@gmail.com')

        // cy.get('#phone').type('123455667778')

        cy.get('#phone-checkbox').click()

        const longtext = 'meudeus nao aguento mais essa vida desgraçada de estudar porem amo essa área de qualidade sera que um dia vencerei? eis a questão'
        cy.get('textarea')
            .should('be.visible')
            .type(longtext, {delay: 0}) // para rodar como se fosse um ctrl c ctrl v, para que o funcionamento de type para digitar um texto longo seja de 0 segundos. 
            .should('have.value', longtext)


        cy.get('button').click()// clicar no botão

        cy.get('.error').should('be.visible')



    })

    //Exerrcicio5

    it.only('preenche e limpa os campos nome, sobrenome, email e telefone', function(){

        cy.get('input[name="firstName"]')
        .type('Gabriella')
        .should('have.value', 'Gabriella')
        .clear()
        .should('have.value', '')


        cy.get('input[name="lastName"]')
        .type('Santana')
        .should('have.value', 'Santana')
        .clear()
        .should('have.value', '')


        cy.get('#email')
        .type('gabriella@gmail.com')
        .should('have.value', 'gabriella@gmail.com')
        .clear()
        .should('have.value', '')

        cy.get('#phone')
        .type('123455667778')
        .should('have.value', '123455667778')
        .clear()
        .should('have.value', '')


        const longtext = 'meudeus nao aguento mais essa vida desgraçada de estudar porem amo essa área de qualidade sera que um dia vencerei? eis a questão'
        cy.get('textarea')
            .should('be.visible')
            .type(longtext, {delay: 0}) // para rodar como se fosse um ctrl c ctrl v, para que o funcionamento de type para digitar um texto longo seja de 0 segundos. 
            .should('have.value', longtext)
            .clear()
            .should('have.value', '')
    


    })
        
  })

  //Exercicio 6
  



/*describe('Central de atendimento ao cliente TAT', function(){
    it('preenche os campos obrigatórios e envia o formulário', function(){

        cy.get('input[name="firstName"]')
            .type('Gabriella')
            .should('have.value', 'Gabriella')

    })



})*/
