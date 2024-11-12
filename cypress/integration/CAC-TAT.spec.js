/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
        beforeEach(function(){
                
            cy.visit('./src/index.html')
        })

    it('envia o formulário com sucesso usando um comando customizado', function(){

        cy.fillMandatoryFieldsAndSubmit() //esse comando é um customizado, para eliminar a duplicação de código, utilizando como suporte a pasta "support" no arquivo de "commands.js"
        cy.get('.success').should('be.visible')

    })
    it('selecionar a opção youtube do seletor', function(){

        cy.selectOneProductfortext()

    })

    it('selecionar a opção blog do seletor', function(){

        cy.selectOneProductforvalue()

    })

    it('selecionar a opção blog do seletor', function(){

        cy.selectOneProductforIndice()

    })

    it.only('marca o tipo de atendimento "Feedback', function(){

        cy.marcaOTipoDeAtendimentoFeedback()

    })

    it.only('marca o tipo de atendimento "Feedback', function(){

        cy.marcaCadaTipo()

    })





        
  })









