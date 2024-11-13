/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
        beforeEach(function(){
                
            cy.visit('./src/index.html')
        })

        it('verifica o titulo da aplicação', function(){

           cy.title().should('be.equal', "Central de Atendimento ao Cliente TAT")
    
        })


    it('envia o formulário com sucesso usando um comando customizado', function(){

        cy.fillMandatoryFieldsAndSubmit() //esse comando é um customizado, para eliminar a duplicação de código, utilizando como suporte a pasta "support" no arquivo de "commands.js"
        cy.get('.success').should('be.visible')

    })
    it('selecionar a opção youtube do seletor', function(){

        cy.selectOneProductfortext()

    })

    it('marca o tipo de atendimento "Feedback', function(){

        cy.marcaOTipoDeAtendimentoFeedback()

    })

    it('marca cada tipo de atendimento', function(){

        cy.marcaCadaTipo()

    })

    it('desmarcar o checkbox', function(){

        cy.get('input[type="checkbox"]').check()
        cy.get('input[type="checkbox"]').last().uncheck().should('not.be.checked')


    

    
    
    })

    it('marcando os checkbox sem repetição de código e verificando se todos estão marcados', function(){

        cy.get('input[type="checkbox"]').check()
            .as('checkboxes')

        cy.get('@checkboxes')
            .each(checkbox => {
                expect(checkbox[0].checked).to.equal(true) //O expect é uma função usada em testes no Cypress (e em outras bibliotecas de teste) para fazer asserções, que são verificações das condições esperadas. Ele avalia se o valor real corresponde ao valor ou estado que esperamos. Se a asserção for verdadeira, o teste continua; se for falsa, o teste falha. Por exemplo, em expect(valor).to.equal(esperado), expect verifica se valor realmente é igual a esperado.
            })
    
    })

    
    it('seleciona arquivo da pasta fixtures', function(){

        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json')
            .should(function($input){
                expect($input[0].files[0].name).to.equal('example.json') //Verifica que o nome do primeiro arquivo no campo é example.json, confirmando que o arquivo correto foi carregado.

            })

        
    
    })

    it('seleciona um arquivo simulando um drag-and-drop', function(){

        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json', {action: "drag-drop"}) //{ action: "drag-drop" } simula o comportamento de "arrastar e soltar" o arquivo no campo de upload, em vez do método padrão de seleção.
            .should(function($input){
                expect($input[0].files[0].name).to.equal('example.json') //Verifica que o nome do primeiro arquivo no campo é example.json, confirmando que o arquivo correto foi carregado.

            })

        
    
    })


    
    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function(){


        cy.fixture('example.json').as('sampleFile')


        cy.get('input[type="file"]')
            .selectFile('@sampleFile')
            .should(function($input){
                expect($input[0].files[0].name).to.equal('example.json') //Verifica que o nome do primeiro arquivo no campo é example.json, confirmando que o arquivo correto foi carregado.

            })

        
    
    })

        
  })









