/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
        beforeEach(function(){
                
            cy.visit('./src/index.html')
        })

    it.only('envia o formulário com sucesso usando um comando customizado', function(){

        cy.fillMandatoryFieldsAndSubmit() //esse comando é um customizado, para eliminar a duplicação de código, utilizando como suporte a pasta "support" no arquivo de "commands.js"
        cy.get('.success').should('be.visible')

    })
    it.only('selecionar a opção youtube do seletor', function(){

        cy.selectOneProductfortext()

    })

    it.only('selecionar a opção blog do seletor', function(){

        cy.selectOneProductforvalue()

    })

    it.only('selecionar a opção blog do seletor', function(){

        cy.selectOneProductforIndice()

    })




        
  })









